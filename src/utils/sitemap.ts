import {getAllNows} from "~/utils/now"
import {getPosts, getTags, getTopics} from "~/utils/posts"

const generateSitemap = async () => {
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
    getPosts().forEach(post => {
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

    return sitemap
}

export {generateSitemap}
