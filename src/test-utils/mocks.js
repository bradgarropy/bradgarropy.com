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
        url: "https://github.com/bradgarropy/bradgarropy.com",
        name: "bradgarropy.com",
        description: "🏠 my mansion on the web",
        stars: 34,
    },
    {
        url: "https://github.com/bradgarropy/dailytexascountry.com",
        name: "dailytexascountry.com",
        description:
            "🤠 she tries to tell me that oklahoma's better, but I ain't got time for that",
        stars: 3,
    },
    {
        url: "https://github.com/bradgarropy/murphy",
        name: "murphy",
        description: "⏱ the crossfit murph timer",
        stars: 9,
    },
    {
        url: "https://github.com/bradgarropy/labman-cli",
        name: "labman-cli",
        description: "👨🏼‍🔬 github label manager cli",
        stars: 12,
    },
    {
        url: "https://github.com/bradgarropy/ama",
        name: "ama",
        description: "❔ ask me anything",
        stars: 1,
    },
    {
        url: "https://github.com/bradgarropy/dotfiles",
        name: "dotfiles",
        description: "🥃 just the way i like it",
        stars: 3,
    },
]

const mockProjectsQuery = {
    githubData: {
        data: {
            user: {
                pinnedItems: {
                    nodes: [
                        {
                            url:
                                "https://github.com/bradgarropy/bradgarropy.com",
                            name: "bradgarropy.com",
                            description: "🏠 my mansion on the web",
                            stargazerCount: 34,
                            repositoryTopics: {
                                nodes: [
                                    {
                                        topic: {
                                            name: "gatsby",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "react",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "eslint",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "blog",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "portfolio",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "styled-components",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "hacktoberfest",
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            url:
                                "https://github.com/bradgarropy/dailytexascountry.com",
                            name: "dailytexascountry.com",
                            description:
                                "🤠 she tries to tell me that oklahoma's better, but I ain't got time for that",
                            stargazerCount: 3,
                            repositoryTopics: {
                                nodes: [
                                    {
                                        topic: {
                                            name: "gatsby",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "react",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "styled-components",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "prettier",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "eslint",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "spotify",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "youtube",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "twitter",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "airtable",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "blog",
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            url: "https://github.com/bradgarropy/murphy",
                            name: "murphy",
                            description: "⏱ the crossfit murph timer",
                            stargazerCount: 9,
                            repositoryTopics: {
                                nodes: [
                                    {
                                        topic: {
                                            name: "svelte",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "tailwindcss",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "faunadb",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "netlify",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "netlify-identity",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "rollup",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "murph",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "murphy",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "crossfit",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "workout",
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            url: "https://github.com/bradgarropy/labman-cli",
                            name: "labman-cli",
                            description: "👨🏼‍🔬 github label manager cli",
                            stargazerCount: 12,
                            repositoryTopics: {
                                nodes: [
                                    {
                                        topic: {
                                            name: "github",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "issues",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "labels",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "octokit",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "javascript",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "nodejs",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "cli",
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            url: "https://github.com/bradgarropy/ama",
                            name: "ama",
                            description: "❔ ask me anything",
                            stargazerCount: 1,
                            repositoryTopics: {
                                nodes: [
                                    {
                                        topic: {
                                            name: "ama",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "ask-me-anything",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "question",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "answer",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "question-and-answer",
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            url: "https://github.com/bradgarropy/dotfiles",
                            name: "dotfiles",
                            description: "🥃 just the way i like it",
                            stargazerCount: 3,
                            repositoryTopics: {
                                nodes: [
                                    {
                                        topic: {
                                            name: "dotfiles",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "vscode",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "bash",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "eslint",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "hyper",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "prettier",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "create-react-app",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "gatsby",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "python",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "gitignore",
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
        },
    },
}

export {
    mockMeta,
    mockMetaQuery,
    mockPosts,
    mockPostsQuery,
    mockProjects,
    mockProjectsQuery,
    mockVideos,
    mockVideosQuery,
}
