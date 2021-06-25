import {mockMeta, mockPosts} from "./"

const mockPostsQuery = {
    posts: {
        nodes: mockPosts,
    },
}

const mockMetaQuery = {
    site: {
        siteMetadata: mockMeta,
    },
}

const mockVideosQuery = {
    videos: {
        nodes: [
            {
                title: "first test video",
                videoId: "abc123",
                localThumbnail: {
                    childImageSharp: {
                        gatsbyImageData: {},
                    },
                },
            },
            {
                title: "second test video",
                videoId: "def456",
                localThumbnail: {
                    childImageSharp: {
                        gatsbyImageData: {},
                    },
                },
            },
        ],
    },
}

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

const mockHireMeQuery = {
    hireMe: {
        html: "<p>hire me</p>",
    },
}

const mockTestimonialsQuery = {
    testimonials: {
        nodes: [
            {
                frontmatter: {
                    name: "First Test User",
                    profile: "https://twitter.com/first-test-user",
                    photo: {
                        childImageSharp: {
                            gatsbyImageData: {},
                        },
                    },
                },
                html: "<p>First test review.</p>",
            },
            {
                frontmatter: {
                    name: "Second Test User",
                    profile: "https://twitter.com/second-test-user",
                    photo: {
                        childImageSharp: {
                            gatsbyImageData: {},
                        },
                    },
                },
                html: "<p>Second test review.</p>",
            },
        ],
    },
}

export {
    mockHireMeQuery,
    mockMetaQuery,
    mockPodcastQuery,
    mockPostsQuery,
    mockProjectsQuery,
    mockSponsorsQuery,
    mockTestimonialsQuery,
    mockVideosQuery,
}
