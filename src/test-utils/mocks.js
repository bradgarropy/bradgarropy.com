const mockPosts = [
    {
        frontmatter: {
            date: "January 1, 2021",
            slug: "first-test-post",
            title: "first test post",
            topic: {
                icon: "😎",
                name: "life",
            },
        },
    },
    {
        frontmatter: {
            date: "February 1, 2021",
            slug: "second-test-post",
            title: "second test post",
            topic: {
                icon: "🔌",
                name: "tech",
            },
        },
    },
    {
        frontmatter: {
            date: "March 1, 2021",
            slug: "third-test-post",
            title: "third test post",
            topic: {
                icon: "💻",
                name: "coding",
            },
        },
    },
]

const mockPostsQuery = {
    posts: {
        nodes: mockPosts,
    },
}

const mockMeta = {
    siteUrl: "https://bradgarropy.com",
    url: "https://bradgarropy.com",
    title: "bradgarropy",
    description: "🏠 my home on the web",
    keywords: ["gatsby", "react", "scss", "eslint", "blog", "portfolio"],
    email: "bradgarropy@gmail.com",
    twitter: "bradgarropy",
}

const mockMetaQuery = {
    site: {
        siteMetadata: mockMeta,
    },
}

export {mockMeta, mockMetaQuery, mockPosts, mockPostsQuery}
