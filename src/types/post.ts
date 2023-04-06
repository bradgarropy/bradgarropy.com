type Post = {
    html: string
    frontmatter: PostFrontmatter
}

type PostFrontmatter = {
    date: string
    topic: string
    title: string
    slug: string
    tags: string[]
}

type Topic = {
    icon: string
    name: string
}

export type {Post, PostFrontmatter, Topic}
