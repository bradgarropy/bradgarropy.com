import {parse} from "date-fns"
import fs from "fs"
import path from "path"
import {parseFrontmatter, parseMarkdown} from "utils/markdown"

const getPost = async slug => {
    const postPath = path.join(process.cwd(), `content/posts/${slug}.md`)
    const file = fs.readFileSync(postPath, "utf8")
    const rawPost = await parseMarkdown(file)

    const post = {
        ...rawPost,
        frontmatter: {
            ...rawPost.frontmatter,
            slug,
        },
    }

    return post
}

const getPostFrontmatter = slug => {
    const postPath = path.join(process.cwd(), `content/posts/${slug}.md`)
    const file = fs.readFileSync(postPath, "utf8")
    const rawFrontmatter = parseFrontmatter(file)

    const frontmatter = {
        ...rawFrontmatter,
        slug,
    }

    return frontmatter
}

const getPosts = async () => {
    const postsPath = path.join(process.cwd(), "content/posts")
    const files = fs.readdirSync(postsPath)
    const slugs = files.map(file => path.parse(file).name)
    const posts = await Promise.all(slugs.map(slug => getPost(slug)))

    posts.sort((a, b) => {
        const aDate = parse(a.frontmatter.date, "yyyy-MM-dd", new Date())
        const bDate = parse(b.frontmatter.date, "yyyy-MM-dd", new Date())
        return bDate - aDate
    })

    return posts
}

const getPostsFrontmatter = () => {
    const postsPath = path.join(process.cwd(), "content/posts")
    const files = fs.readdirSync(postsPath)
    const slugs = files.map(file => path.parse(file).name)
    const posts = slugs.map(slug => getPostFrontmatter(slug))

    posts.sort((a, b) => {
        const aDate = parse(a.date, "yyyy-MM-dd", new Date())
        const bDate = parse(b.date, "yyyy-MM-dd", new Date())
        return bDate - aDate
    })

    return posts
}

const getPostsByTopic = topic => {
    const posts = getPostsFrontmatter()
    const postsByTopic = posts.filter(post => post.topic.name === topic)

    return postsByTopic
}

export {getPost, getPosts, getPostsByTopic, getPostsFrontmatter}
