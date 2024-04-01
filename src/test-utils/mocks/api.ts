const mockYoutubeResponse = {
    items: [
        {
            id: {
                videoId: "abc123",
            },
            snippet: {
                thumbnails: {
                    default: {
                        url: "https://youtube.com/first.jpg",
                    },
                },
                title: "first test video",
            },
        },
        {
            id: {
                videoId: "def456",
            },
            snippet: {
                thumbnails: {
                    default: {
                        url: "https://youtube.com/second.jpg",
                    },
                },
                title: "second test video",
            },
        },
    ],
}

const mockYoutubeErrorResponse = {
    error: {
        code: 403,
        message: "quota exceeded",
        errors: {
            message: "you made too many requests",
            domain: "youtube.com",
            reason: "quota exceeded",
        },
    },
}

const mockGitHubSponsorsResponse = {
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
                        name: "$10 a month",
                        description: "### 💎 DIAMOND",
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
                        name: "$5 a month",
                        description: "### 🥇 GOLD",
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
                        name: "$50 one time",
                        description: "### 🤩",
                        isOneTime: true,
                    },
                },
                {
                    sponsorEntity: {
                        login: "justingarropy",
                        url: "https://github.com/justingarropy",
                        avatarUrl: "https://github.com/justingarropy.png",
                    },
                    tier: {
                        name: "$25 one time",
                        description: "### 😍",
                        isOneTime: true,
                    },
                },
                {
                    sponsorEntity: {
                        login: "romangarropy",
                        url: "https://github.com/romangarropy",
                        avatarUrl: "https://github.com/romangarropy.png",
                    },
                    tier: {
                        name: "$1000",
                        description: "Invalid sponsorship tier",
                        isOneTime: false,
                    },
                },
            ],
        },
    },
}

const mockGitHubPinnedResponse = {
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
}

const mockPostsPaths = [
    "first-test-post.md",
    "second-test-post.md",
    "third-test-post.md",
    "fourth-test-post.md",
]

const mockPostsResponse = [
    {
        data: {
            date: "2021-01-01",
            slug: "first-test-post",
            tags: ["first-tag"],
            title: "first test post",
            topic: "life",
        },
        content: "This is the first test post.",
    },
    {
        data: {
            date: "2021-02-01",
            slug: "second-test-post",
            tags: ["first-tag", "second-tag"],
            title: "second test post",
            topic: "tech",
        },
        content: "This is the second test post.",
    },
    {
        data: {
            date: "2021-03-01",
            slug: "third-test-post",
            tags: ["first-tag", "second-tag", "third-tag"],
            title: "third test post",
            topic: "coding",
        },
        content: "This is the third test post.",
    },
    {
        data: {
            date: "2021-03-01",
            slug: "fourth-test-post",
            tags: ["first-tag", "second-tag", "third-tag", "fourth-tag"],
            title: "fourth test post",
            topic: "coding",
        },
        content: "This is the fourth test post.",
    },
]

const mockNowPaths = ["2020-12-30.md", "2020-12-31.md", "2021-01-01.md"]

const mockNowsResponse = [
    {
        data: {
            date: "2021-01-01",
        },
        content: "This is a newer now.",
    },
    {
        data: {
            date: "2020-12-31",
        },
        content: "This is a now.",
    },
    {
        data: {
            date: "2020-12-30",
        },
        content: "This is an older now.",
    },
]

export {
    mockGitHubPinnedResponse,
    mockGitHubSponsorsResponse,
    mockNowPaths,
    mockNowsResponse,
    mockPostsPaths,
    mockPostsResponse,
    mockYoutubeErrorResponse,
    mockYoutubeResponse,
}
