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

const mockMeta = {
    siteUrl: "https://bradgarropy.com",
    url: "https://bradgarropy.com",
    title: "bradgarropy",
    description: "🏠 my home on the web",
    keywords: ["gatsby", "react", "scss", "eslint", "blog", "portfolio"],
    email: "bradgarropy@gmail.com",
    twitter: "bradgarropy",
}

const mockVideos = [
    {
        id: "abc123",
        title: "first test video",
        thumbnail: expect.any(Object),
    },
    {
        id: "def456",
        title: "second test video",
        thumbnail: expect.any(Object),
    },
]

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

const mockChannelStatus = {
    data: [
        {
            is_live: true,
        },
    ],
}

const mockHireMe = {
    html: "<p>hire me</p>",
}

const mockTestimonials = [
    {
        name: "First Test User",
        twitter: "https://twitter.com/first-test-user",
        photo: {},
        html: "<p>First test review.</p>",
    },
    {
        name: "Second Test User",
        twitter: "https://twitter.com/second-test-user",
        photo: {},
        html: "<p>Second test review.</p>",
    },
]

export {
    mockChannelStatus,
    mockHireMe,
    mockMeta,
    mockPodcast,
    mockPosts,
    mockProjects,
    mockSponsors,
    mockTestimonials,
    mockVideos,
}
