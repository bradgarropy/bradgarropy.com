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
                        },
                        {
                            url:
                                "https://github.com/bradgarropy/dailytexascountry.com",
                            name: "dailytexascountry.com",
                            description:
                                "🤠 she tries to tell me that oklahoma's better, but I ain't got time for that",
                            stargazerCount: 3,
                        },
                        {
                            url: "https://github.com/bradgarropy/murphy",
                            name: "murphy",
                            description: "⏱ the crossfit murph timer",
                            stargazerCount: 9,
                        },
                        {
                            url: "https://github.com/bradgarropy/labman-cli",
                            name: "labman-cli",
                            description: "👨🏼‍🔬 github label manager cli",
                            stargazerCount: 12,
                        },
                        {
                            url: "https://github.com/bradgarropy/ama",
                            name: "ama",
                            description: "❔ ask me anything",
                            stargazerCount: 1,
                        },
                        {
                            url: "https://github.com/bradgarropy/dotfiles",
                            name: "dotfiles",
                            description: "🥃 just the way i like it",
                            stargazerCount: 3,
                        },
                    ],
                },
            },
        },
    },
}

const mockPodcast = {
    title: "Test Podcast",
    link: "https://anchor.fm/test-podcast",
    image: "https://anchor.fm/test-podcast.jpg",
    episodes: [
        {
            title: "First Episode",
            link: "https://anchor.fm/test-podcast/episodes/first-episode",
            date: "2021-01-01T00:00:00.000Z",
        },
        {
            title: "Second Episode",
            link: "https://anchor.fm/test-podcast/episodes/second-episode",
            date: "2021-02-02T00:00:00.000Z",
        },
    ],
}

const mockPodcastQuery = {
    podcast: {
        title: "Test Podcast",
        link: "https://anchor.fm/test-podcast",
        image: {
            url: "https://anchor.fm/test-podcast.jpg",
        },
        items: [
            {
                item: {
                    title: "First Episode",
                    link:
                        "https://anchor.fm/test-podcast/episodes/first-episode",
                    isoDate: "2021-01-01T00:00:00.000Z",
                },
            },
            {
                item: {
                    title: "Second Episode",
                    link:
                        "https://anchor.fm/test-podcast/episodes/second-episode",
                    isoDate: "2021-02-02T00:00:00.000Z",
                },
            },
        ],
    },
}

const mockSponsors = {
    "monthly": [
        {
            username: "bradgarropy",
            avatar: "https://github.com/bradgarropy.png",
            profile: "https://github.com/bradgarropy",
            tier: "💎",
        },
        {
            username: "gabygarropy",
            avatar: "https://github.com/gabygarropy.png",
            profile: "https://github.com/gabygarropy",
            tier: "🥇",
        },
    ],
    "one-time": [
        {
            username: "sofigarropy",
            avatar: "https://github.com/sofigarropy.png",
            profile: "https://github.com/sofigarropy",
            tier: "🤩",
        },
        {
            username: "justingarropy",
            avatar: "https://github.com/justingarropy.png",
            profile: "https://github.com/justingarropy",
            tier: "😍",
        },
    ],
}

const mockSponsorsQuery = {
    githubData: {
        data: {
            user: {
                sponsorshipsAsMaintainer: {
                    nodes: [
                        {
                            sponsorEntity: {
                                login: "bradgarropy",
                                url: "https://github.com/bradgarropy",
                                avatarUrl: "https://github.com/bradgarropy.png",
                            },
                            tier: {
                                name: "💎 diamond",
                                description: "### 💎 diamond",
                                isOneTime: false,
                            },
                        },
                        {
                            sponsorEntity: {
                                login: "gabygarropy",
                                url: "https://github.com/gabygarropy",
                                avatarUrl: "https://github.com/gabygarropy.png",
                            },
                            tier: {
                                name: "🥇 gold",
                                description: "### 🥇 gold",
                                isOneTime: false,
                            },
                        },
                        {
                            sponsorEntity: {
                                login: "sofigarropy",
                                url: "https://github.com/sofigarropy",
                                avatarUrl: "https://github.com/sofigarropy.png",
                            },
                            tier: {
                                name: "🤩",
                                description: "### 🤩",
                                isOneTime: true,
                            },
                        },
                        {
                            sponsorEntity: {
                                login: "justingarropy",
                                url: "https://github.com/justingarropy",
                                avatarUrl:
                                    "https://github.com/justingarropy.png",
                            },
                            tier: {
                                name: "😍",
                                description: "### 😍",
                                isOneTime: true,
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
    mockPodcast,
    mockPodcastQuery,
    mockPosts,
    mockPostsQuery,
    mockProjects,
    mockProjectsQuery,
    mockSponsors,
    mockSponsorsQuery,
    mockVideos,
    mockVideosQuery,
}
