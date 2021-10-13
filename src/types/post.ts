type Post = {
    html: string
    frontmatter: {
        date: string
        topic: Topic
        title: string
        slug: string
    }
}

type Topic = {
    icon: string
    name: string
}

export type {Post, Topic}
