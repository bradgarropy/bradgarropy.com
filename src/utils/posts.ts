import {allPosts as contentLayerPosts} from "~/content"
import type {Post, PostFrontmatter, Topic} from "~/types/post"

const icons = {
    coding: "💻",
    tech: "🔌",
    life: "😎",
}

const getLatestPosts = (): PostFrontmatter[] => {
    const latestPosts = getAllPosts().slice(0, 3)
    return latestPosts
}

const getAllPosts = (): PostFrontmatter[] => {
    const posts = contentLayerPosts.map(contentLayerPost => {
        const post = {
            date: contentLayerPost.date,
            title: contentLayerPost.title,
            topic: contentLayerPost.topic,
            slug: contentLayerPost.slug,
        }

        return post
    })

    const allPosts = sortPostsByDate(posts)
    return allPosts
}

const getPostBySlug = async (slug: PostFrontmatter["slug"]): Promise<Post> => {
    const contentlayerPost = contentLayerPosts.find(post => post.slug === slug)

    const post: Post = {
        html: contentlayerPost.body.html,
        frontmatter: {
            date: contentlayerPost.date,
            slug: contentlayerPost.slug,
            title: contentlayerPost.title,
            topic: contentlayerPost.topic,
        },
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
    const posts = getAllPosts()

    const topicNames = posts.reduce<Topic["name"][]>((topics, post) => {
        if (!topics.includes(post.topic)) {
            topics.push(post.topic)
        }

        return topics
    }, [])

    const topics = topicNames.map(topicName => {
        const topic = getTopic(topicName)
        return topic
    })

    return topics
}

const getPostsByTopic = (topic: Topic["name"]): PostFrontmatter[] => {
    const topicPosts = getAllPosts().filter(post => post.topic === topic)
    return topicPosts
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
