import type {PostFrontmatter} from "~/schemas/post"

type Post = {
    html: string
    frontmatter: PostFrontmatter
}

type Topic = {
    icon: string
    name: PostFrontmatter["topic"]
}

type Tag = PostFrontmatter["tags"][number]

export type {Post, PostFrontmatter, Tag, Topic}
