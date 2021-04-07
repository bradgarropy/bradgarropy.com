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

const mockVideos = [
    {
        title: "first test video",
        videoId: "abc123",
    },
    {
        title: "second test video",
        videoId: "def456",
    },
]

const mockVideosQuery = {
    videos: {
        nodes: mockVideos,
    },
}

const mockProjects = [
    {
        title: "bradgarropy.com",
        description: "🏡 my home on the web",
        url: "https://github.com/bradgarropy/bradgarropy.com",
        stars: 33,
        tech: ["react", "gatsby", "styled-components"],
    },
    {
        title: "dailytexascountry.com",
        description:
            "🤠 she tries to tell me that oklahoma's better, but I ain't got time for that",
        url: "https://github.com/bradgarropy/dailytexascountry.com",
        stars: 3,
        tech: ["react", "gatsby", "styled-components"],
    },
    {
        title: "murphy",
        description: "⏱ the crossfit murph timer",
        url: "https://github.com/bradgarropy/murphy",
        stars: 9,
        tech: ["svelte", "tailwind", "fauna"],
    },
    {
        title: "labman-cli",
        description: "👨🏼‍🔬 github label manager cli",
        url: "https://github.com/bradgarropy/labman-cli",
        stars: 12,
        tech: ["node"],
    },
]

export {
    mockMeta,
    mockMetaQuery,
    mockPosts,
    mockPostsQuery,
    mockProjects,
    mockVideos,
    mockVideosQuery,
}
