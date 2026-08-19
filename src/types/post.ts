import type {PostFrontmatter} from "~/schemas/post"
import type {RenderedMarkdown} from "~/types/markdown"

type Post = {
    path: string
    markdown: string
    frontmatter: PostFrontmatter
}

type RenderedPost = RenderedMarkdown<PostFrontmatter>

type Topic = {
    icon: string
    name: PostFrontmatter["topic"]
}

type Tag = PostFrontmatter["tags"][number]

export type {Post, PostFrontmatter, RenderedPost, Tag, Topic}
