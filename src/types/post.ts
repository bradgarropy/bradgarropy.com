type Post = {
    html: string
    frontmatter: {
        date: string
        topic: {
            icon: string
            name: string
        }
        title: string
        slug: string
    }
}

export type {Post}
