import type {Expression} from "fuse.js"
import Fuse from "fuse.js"

import type {Markdown} from "~/types/markdown"
import type {Post, PostFrontmatter, Tag, Topic} from "~/types/post"
import {transformMarkdown} from "~/utils/markdown.server"

const icons: Record<string, string> = {
    coding: "💻",
    tech: "🔌",
    life: "😎",
}

const getLatestPost = (): PostFrontmatter => {
    const latestPosts = getPosts(1)
    const latestPost = latestPosts[0]

    return latestPost
}

const getPosts = (count?: number): PostFrontmatter[] => {
    const files = import.meta.glob<Markdown<PostFrontmatter>>(
        "/content/posts/*.md",
        {
            eager: true,
        },
    )

    const posts = Object.values(files).map(file => file.attributes)
    const latestPosts = sortPostsByDate(posts).slice(0, count)

    return latestPosts
}

const getPostBySlug = async (slug: PostFrontmatter["slug"]): Promise<Post> => {
    const files = import.meta.glob<Markdown<PostFrontmatter>>(
        "/content/posts/*.md",
        {
            eager: true,
        },
    )

    const file = files[`/content/posts/${slug}.md`]
    const html = await transformMarkdown(file.markdown)

    const post: Post = {
        html,
        frontmatter: file.attributes,
    }

    return post
}

const getTopic = (name: Topic["name"]): Topic => {
    const topic: Topic = {
        name,
        icon: icons[name],
    }

    return topic
}

const getTopics = (): Topic[] => {
    const posts = getPosts()

    const topics = posts.reduce<Topic[]>((topics, post) => {
        if (!topics.some(topic => topic.name === post.topic)) {
            return [...topics, getTopic(post.topic)]
        } else {
            return topics
        }
    }, [])

    return topics
}

const getTags = (): Tag[] => {
    const posts = getPosts()

    const duplicateTags = posts.flatMap(post => {
        return post.tags
    })

    const tags = [...new Set(duplicateTags)]
    return tags
}

const getPostsByTopic = (topic: Topic["name"]): PostFrontmatter[] => {
    const posts = getPosts()
    const topicPosts = posts.filter(post => post.topic === topic)

    return topicPosts
}

const getPostsByTag = (tag: Tag): PostFrontmatter[] => {
    const posts = getPosts()
    const tagPosts = posts.filter(post => post.tags.includes(tag))

    return tagPosts
}

const sortPostsByDate = (posts: PostFrontmatter[]): PostFrontmatter[] => {
    const sortedPosts = [...posts]

    sortedPosts.sort((a, b) => {
        const aDate = new Date(a.date)
        const bDate = new Date(b.date)

        if (aDate < bDate) {
            return 1
        } else if (aDate > bDate) {
            return -1
        } else {
            return 0
        }
    })

    return sortedPosts
}

const getRelatedPosts = (post: PostFrontmatter) => {
    const posts = getPosts()

    const fuse = new Fuse(posts, {
        keys: ["title", "topic", "tags"],
    })

    fuse.remove(item => item.slug === post.slug)

    const query: Expression = {
        $or: [
            {title: post.title},
            {topic: post.topic},
            ...post.tags.map(tag => ({tags: tag})),
        ],
    }

    const queryResults = fuse.search(query).slice(0, 2)
    const relatedPosts = queryResults.map(result => result.item)

    return relatedPosts
}

export {
    getLatestPost,
    getPostBySlug,
    getPosts,
    getPostsByTag,
    getPostsByTopic,
    getRelatedPosts,
    getTags,
    getTopic,
    getTopics,
    sortPostsByDate,
}
