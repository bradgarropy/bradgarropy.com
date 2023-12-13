import {getAllNows} from "~/utils/now"
import {getAllPosts, getTags, getTopics} from "~/utils/posts"

export const loader = async () => {
    const pages = [
        "/",
        "/blog",
        "/connect",
        "/contact",
        "/hire-me",
        "/now",
        "/resume",
        "/sponsors",
        "/uses",
    ]

    // blogs
    getAllPosts().forEach(post => {
        pages.push(`/blog/${post.slug}`)
    })

    // nows
    getAllNows().forEach(now => {
        pages.push(`/now/${now}`)
    })

    // tags
    getTags().forEach(tag => {
        pages.push(`/tag/${tag}`)
    })

    // topics
    getTopics().forEach(topic => {
        pages.push(`/topic/${topic.name}`)
    })

    const sitemap = pages
        .map(page => `https://bradgarropy.com${page}`)
        .sort()
        .join("\n")

    const response = new Response(sitemap, {
        status: 200,
        headers: {
            "content-type": "text/plain",
        },
    })

    return response
}
