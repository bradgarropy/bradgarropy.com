type Post = {
    html: string
    frontmatter: PostFrontmatter
}

type PostFrontmatter = {
    date: string
    topic: Topic
    title: string
    slug: string
}

type Topic = {
    icon: string
    name: string
}

export type {Post, PostFrontmatter, Topic}
