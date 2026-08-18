import {postFrontmatterSchema} from "~/schemas/post"
import type {Markdown} from "~/types/markdown"
import type {Post, PostCollection, PostFrontmatter} from "~/types/post"

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

const createPostCollection = (
    files: Record<string, Markdown<unknown>>,
): PostCollection => {
    const posts = Object.entries(files).map(([path, file]) => {
        const {attributes, markdown} = file
        const frontmatter = postFrontmatterSchema.parse(attributes)

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

    const getAll = (): Post[] => {
        return [...posts]
    }

    const getBySlug = (slug: PostFrontmatter["slug"]): Post | null => {
        const post = postsBySlug.get(slug)

        if (!post) {
            return null
        }

        return post
    }

    const getLatest = (): Post | null => {
        const post = posts[0]

        if (!post) {
            return null
        }

        return post
    }

    return {getAll, getBySlug, getLatest}
}

export {createPostCollection}
