type Post = {
    html: string
    frontmatter: PostFrontmatter
}

type PostFrontmatter = {
    date: string
    topic: string
    title: string
    slug: string
    tags: Tag[]
}

type Topic = {
    icon: string
    name: string
}

type Tag = string

export type {Post, PostFrontmatter, Tag, Topic}
