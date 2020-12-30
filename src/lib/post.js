import {parse} from "date-fns"
import fs from "fs"
import path from "path"
import {parseMarkdown} from "utils/markdown"

const getPost = async slug => {
    const postPath = path.join(process.cwd(), `content/posts/${slug}/index.md`)
    const file = fs.readFileSync(postPath, "utf8")
    const post = parseMarkdown(file)

    return post
}

const getPosts = async () => {
    const postsPath = path.join(process.cwd(), "content/posts")

    const posts = await Promise.all(
        fs.readdirSync(postsPath).map(slug => getPost(slug)),
    )

    posts.sort((a, b) => {
        const aDate = parse(a.frontmatter.date, "yyyy-MM-dd", new Date())
        const bDate = parse(b.frontmatter.date, "yyyy-MM-dd", new Date())
        return bDate - aDate
    })

    return posts
}

export {getPost, getPosts}
