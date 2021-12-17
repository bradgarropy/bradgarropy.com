import fs from "fs"
import matter from "gray-matter"
import path from "path"
import {PostFrontmatter} from "types/post"

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

    const latestPosts = posts
        // sort posts by date
        .sort((a, b) => {
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
        // return the three latest posts
        .slice(0, 3)

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

    const allPosts = posts
        // sort posts by date
        .sort((a, b) => {
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

    return allPosts
}

export {getAllPosts, getLatestPosts}
