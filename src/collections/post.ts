import {postFrontmatterSchema} from "~/schemas/post"
import type {Markdown} from "~/types/markdown"
import type {Post, PostFrontmatter} from "~/types/post"
import {postFiles} from "~/utils/files.server"
import {parseFrontmatter} from "~/utils/frontmatter"

const validatePostSlug = (post: Post): void => {
    const {path, frontmatter} = post
    const filename = path.split("/").at(-1)

    if (!filename) {
        throw new Error(`Could not determine filename from ${path}.`)
    }

    if (!filename.endsWith(".md")) {
        throw new Error(`Post filename must end in .md: ${path}.`)
    }

    const expectedSlug = filename.slice(0, -3)

    if (frontmatter.slug !== expectedSlug) {
        throw new Error(
            `Invalid slug in ${path}: expected "${expectedSlug}", received "${frontmatter.slug}".`,
        )
    }
}

const createPosts = (files: Record<string, Markdown<unknown>>): Post[] => {
    const posts = Object.entries(files).map(([path, file]) => {
        const {attributes, markdown} = file

        const frontmatter = parseFrontmatter(
            path,
            postFrontmatterSchema,
            attributes,
        )

        const post: Post = {
            path,
            markdown,
            frontmatter,
        }

        validatePostSlug(post)
        return post
    })

    const postsBySlug = new Map<PostFrontmatter["slug"], Post>()

    posts.forEach(post => {
        const slug = post.frontmatter.slug
        const existingPost = postsBySlug.get(slug)

        if (existingPost) {
            throw new Error(
                `Duplicate post slug "${slug}" in ${existingPost.path} and ${post.path}.`,
            )
        }

        postsBySlug.set(slug, post)
    })

    posts.sort((a, b) => {
        return b.frontmatter.date.localeCompare(a.frontmatter.date)
    })

    return posts
}

const posts = createPosts(postFiles)

export {createPosts, posts}
