type Post = {
    html: string
    frontmatter: {
        date: string
        topic: Topic
        title: string
        slug: string
    }
}

type LatestPost = Pick<Post["frontmatter"], "date" | "title" | "slug">

type Topic = {
    icon: string
    name: string
}

export type {LatestPost, Post, Topic}
