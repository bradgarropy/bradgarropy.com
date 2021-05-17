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
        description: "🏠 my home on the web",
        stars: 35,
        topics: [
            "gatsby",
            "react",
            "eslint",
            "blog",
            "portfolio",
            "styled-components",
            "hacktoberfest",
        ],
    },
    {
        url: "https://github.com/bradgarropy/dailytexascountry.com",
        name: "dailytexascountry.com",
        description: "🤠 texas country music community",
        stars: 3,
        topics: [
            "gatsby",
            "react",
            "styled-components",
            "prettier",
            "eslint",
            "spotify",
            "youtube",
            "twitter",
            "airtable",
            "blog",
            "playlists",
            "episodes",
            "store",
            "dtxc",
            "daily-texas-country",
            "texas-country",
            "country",
        ],
    },

    {
        url: "https://github.com/bradgarropy/hue-sdk",
        name: "hue-sdk",
        description: "💡 philips hue sdk",
        stars: 35,
        topics: [
            "node",
            "eslint",
            "prettier",
            "philips",
            "hue",
            "sdk",
            "typescript",
        ],
    },
    {
        url: "https://github.com/bradgarropy/use-countdown",
        name: "use-countdown",
        description: "⏳ useCountdown hook",
        stars: 47,
        topics: ["typescript", "react", "react-hook", "countdown"],
    },
    {
        url: "https://github.com/bradgarropy/labman-cli",
        name: "labman-cli",
        description: "👨🏼‍🔬 github label manager cli",
        stars: 12,
        topics: [
            "github",
            "issues",
            "labels",
            "octokit",
            "javascript",
            "nodejs",
            "cli",
            "node",
        ],
    },
    {
        url: "https://github.com/bradgarropy/murphy",
        name: "murphy",
        description: "⏱ the crossfit murph timer",
        stars: 9,
        topics: [
            "svelte",
            "faunadb",
            "netlify",
            "netlify-identity",
            "rollup",
            "murph",
            "murphy",
            "crossfit",
            "workout",
            "timer",
            "tailwind",
        ],
    },
]

const mockProjectsQuery = {
    githubData: {
        data: {
            user: {
                pinnedItems: {
                    nodes: [
                        {
                            url: "https://github.com/bradgarropy/bradgarropy.com",
                            name: "bradgarropy.com",
                            description: "🏠 my home on the web",
                            stargazerCount: 35,
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
                            url: "https://github.com/bradgarropy/dailytexascountry.com",
                            name: "dailytexascountry.com",
                            description: "🤠 texas country music community",
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
                                    {
                                        topic: {
                                            name: "playlists",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "episodes",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "store",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "dtxc",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "daily-texas-country",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "texas-country",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "country",
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            url: "https://github.com/bradgarropy/hue-sdk",
                            name: "hue-sdk",
                            description: "💡 philips hue sdk",
                            stargazerCount: 35,
                            repositoryTopics: {
                                nodes: [
                                    {
                                        topic: {
                                            name: "node",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "eslint",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "prettier",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "philips",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "hue",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "sdk",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "typescript",
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            url: "https://github.com/bradgarropy/use-countdown",
                            name: "use-countdown",
                            description: "⏳ useCountdown hook",
                            stargazerCount: 47,
                            repositoryTopics: {
                                nodes: [
                                    {
                                        topic: {
                                            name: "typescript",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "react",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "react-hook",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "countdown",
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
                                    {
                                        topic: {
                                            name: "node",
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
                                    {
                                        topic: {
                                            name: "timer",
                                        },
                                    },
                                    {
                                        topic: {
                                            name: "tailwind",
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
                    link: "https://anchor.fm/test-podcast/episodes/first-episode",
                    isoDate: "2021-01-01T00:00:00.000Z",
                },
            },
            {
                item: {
                    title: "Second Episode",
                    link: "https://anchor.fm/test-podcast/episodes/second-episode",
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

const mockAppCtx = {
    open: false,
    setOpen: jest.fn(),
    theme: "light",
    setTheme: jest.fn(),
}

const mockChannelStatus = {
    data: [
        {
            is_live: true,
        },
    ],
}

export {
    mockAppCtx,
    mockChannelStatus,
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
