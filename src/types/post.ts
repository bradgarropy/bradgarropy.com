import type {PostFrontmatter} from "~/schemas/post"

type Post = {
    path: string
    markdown: string
    frontmatter: PostFrontmatter
}

type RenderedPost = {
    html: string
    frontmatter: PostFrontmatter
}

type PostCollection = {
    getAll: () => Post[]
    getBySlug: (slug: PostFrontmatter["slug"]) => Post | null
    getLatest: () => Post | null
}

type Topic = {
    icon: string
    name: PostFrontmatter["topic"]
}

type Tag = PostFrontmatter["tags"][number]

export type {Post, PostCollection, PostFrontmatter, RenderedPost, Tag, Topic}
