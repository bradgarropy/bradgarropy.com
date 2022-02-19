import fs from "fs"
import matter from "gray-matter"
import path from "path"
import {Post, PostFrontmatter, Topic} from "types/post"
import {transformMarkdown} from "utils/markdown"

const icons = {
    coding: "💻",
    tech: "🔌",
    life: "😎",
}

const getLatestPosts = (): PostFrontmatter[] => {
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

    const latestPosts = sortPostsByDate(posts).slice(0, 3)
    return latestPosts
}

const getAllPosts = (): PostFrontmatter[] => {
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

    const allPosts = sortPostsByDate(posts)
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

export {
    getAllPosts,
    getLatestPosts,
    getPostBySlug,
    getPostsByTopic,
    getTopic,
    getTopics,
    sortPostsByDate,
}
