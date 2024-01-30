import {writeFile} from "node:fs/promises"

import {getAllNows} from "~/utils/now"
import {getAllPosts, getTags, getTopics} from "~/utils/posts"

const generate = async () => {
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

    await writeFile("public/sitemap.txt", sitemap)
}

generate()
