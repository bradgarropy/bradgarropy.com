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

type Topic = {
    icon: string
    name: PostFrontmatter["topic"]
}

type Tag = PostFrontmatter["tags"][number]

export type {Post, PostFrontmatter, RenderedPost, Tag, Topic}
