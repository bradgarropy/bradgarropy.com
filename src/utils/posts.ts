import fs from "node:fs"
import path from "node:path"

import Fuse from "fuse.js"
import matter from "gray-matter"

import type {Post, PostFrontmatter, Tag, Topic} from "~/types/post"
import {transformMarkdown} from "~/utils/markdown"

const icons = {
    coding: "💻",
    tech: "🔌",
    life: "😎",
}

const getLatestPost = (): PostFrontmatter => {
    const latestPosts = getLatestPosts(1)
    const latestPost = latestPosts[0]

    return latestPost
}

const getLatestPosts = (count?: number): PostFrontmatter[] => {
    const postsPath = path.join(process.cwd(), "content/posts")
    console.log(postsPath)

    const posts = fs
        // read directory of posts
        .readdirSync(postsPath)

        // create path to each markdown file
        // read frontmatter from each post
        .reduce<PostFrontmatter[]>((posts, slug) => {
            const postPath = path.join(process.cwd(), `content/posts/${slug}`)
            const file = matter.read(postPath)
            const post = file.data as PostFrontmatter

            return [...posts, post]
        }, [])

    const latestPosts = sortPostsByDate(posts).slice(0, count)
    return latestPosts
}

const getAllPosts = (): PostFrontmatter[] => {
    const allPosts = getLatestPosts()
    return allPosts
}

const getPostBySlug = async (slug: PostFrontmatter["slug"]): Promise<Post> => {
    const postPath = path.join(process.cwd(), `content/posts/${slug}.md`)

    const file = matter.read(postPath)
    const html = await transformMarkdown(file.content)

    const post: Post = {
        html,
        frontmatter: file.data as PostFrontmatter,
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
    const postsPath = path.join(process.cwd(), "content/posts")

    const topics = fs
        // read directory of posts
        .readdirSync(postsPath)

        // create path to each markdown file
        // read frontmatter from each post
        .reduce<Topic[]>((topics, slug) => {
            const postPath = path.join(process.cwd(), `content/posts/${slug}`)
            const file = matter.read(postPath)
            const post = file.data as PostFrontmatter

            if (!topics.some(topic => topic.name === post.topic)) {
                return [...topics, getTopic(post.topic)]
            } else {
                return topics
            }
        }, [])

    return topics
}

const getTags = (): Tag[] => {
    const postsPath = path.join(process.cwd(), "content/posts")

    const duplicateTags = fs
        // read directory of posts
        .readdirSync(postsPath)

        // create path to each markdown file
        // read frontmatter from each post
        .flatMap(slug => {
            const postPath = path.join(process.cwd(), `content/posts/${slug}`)
            const file = matter.read(postPath)
            const post = file.data as PostFrontmatter
            return post.tags
        })

    const tags = [...new Set(duplicateTags)]
    return tags
}

const getPostsByTopic = (topic: Topic["name"]): PostFrontmatter[] => {
    const postsPath = path.join(process.cwd(), "content/posts")

    const posts = fs
        // read directory of posts
        .readdirSync(postsPath)

        // create path to each markdown file
        // read frontmatter from each post
        .reduce<PostFrontmatter[]>((posts, slug) => {
            const postPath = path.join(process.cwd(), `content/posts/${slug}`)
            const file = matter.read(postPath)
            const post = file.data as PostFrontmatter

            return [...posts, post]
        }, [])

    const topicPosts = posts.filter(post => post.topic === topic)
    const sortedTopicPosts = sortPostsByDate(topicPosts)

    return sortedTopicPosts
}

const getPostsByTag = (tag: Tag): PostFrontmatter[] => {
    const postsPath = path.join(process.cwd(), "content/posts")

    const posts = fs
        // read directory of posts
        .readdirSync(postsPath)

        // create path to each markdown file
        // read frontmatter from each post
        .reduce<PostFrontmatter[]>((posts, slug) => {
            const postPath = path.join(process.cwd(), `content/posts/${slug}`)
            const file = matter.read(postPath)
            const post = file.data as PostFrontmatter

            return [...posts, post]
        }, [])

    const tagPosts = posts.filter(post => post.tags.includes(tag))
    const sortedTagPosts = sortPostsByDate(tagPosts)

    return sortedTagPosts
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
    const posts = getAllPosts()

    const fuse = new Fuse(posts, {
        keys: ["title", "topic", "tags"],
    })

    fuse.remove(item => item.slug === post.slug)

    const query: Fuse.Expression = {
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
    getAllPosts,
    getLatestPost,
    getLatestPosts,
    getPostBySlug,
    getPostsByTag,
    getPostsByTopic,
    getRelatedPosts,
    getTags,
    getTopic,
    getTopics,
    sortPostsByDate,
}
