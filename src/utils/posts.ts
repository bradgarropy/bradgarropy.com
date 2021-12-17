import fs from "fs"
import matter from "gray-matter"
import path from "path"
import {Post, PostFrontmatter, Topic} from "types/post"

const getLatestPosts = (): PostFrontmatter[] => {
    const postsPath = path.join(process.cwd(), "content/posts")

    const posts = fs
        // read directory of posts
        .readdirSync(postsPath)

        // create path to each markdown file
        // read frontmatter from each post
        .reduce<PostFrontmatter[]>((posts, slug) => {
            const postPath = path.join(
                process.cwd(),
                `content/posts/${slug}/index.md`,
            )

            const file = matter.read(postPath)
            const post = file.data as PostFrontmatter

            return [...posts, post]
        }, [])

    const latestPosts = sortByDate(posts).slice(0, 3)
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
            const postPath = path.join(
                process.cwd(),
                `content/posts/${slug}/index.md`,
            )

            const file = matter.read(postPath)
            const post = file.data as PostFrontmatter

            return [...posts, post]
        }, [])

    const allPosts = sortByDate(posts)
    return allPosts
}

const getPostBySlug = (slug: PostFrontmatter["slug"]): Post => {
    const postPath = path.join(process.cwd(), `content/posts/${slug}/index.md`)

    const file = matter.read(postPath)

    const post: Post = {
        html: file.content,
        frontmatter: file.data as PostFrontmatter,
    }

    return post
}

const getTopic = (name: Topic["name"]): Topic => {
    const topics = getTopics()
    const topic = topics.find(topic => topic.name === name)

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
            const postPath = path.join(
                process.cwd(),
                `content/posts/${slug}/index.md`,
            )

            const file = matter.read(postPath)
            const post = file.data as PostFrontmatter

            if (!topics.some(topic => topic.name === post.topic.name)) {
                return [...topics, post.topic]
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
            const postPath = path.join(
                process.cwd(),
                `content/posts/${slug}/index.md`,
            )

            const file = matter.read(postPath)
            const post = file.data as PostFrontmatter

            return [...posts, post]
        }, [])

    const topicPosts = posts.filter(post => post.topic.name === topic)
    const sortedTopicPosts = sortByDate(topicPosts)

    return sortedTopicPosts
}

const sortByDate = (posts: PostFrontmatter[]): PostFrontmatter[] => {
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
}
