import {Markdown} from "types/markdown"
import {Meta} from "types/meta"
import {Now, NowFrontmatter} from "types/now"
import {Post, PostFrontmatter, Topic} from "types/post"
import {Project} from "types/project"
import {Sponsors} from "types/sponsor"
import {Testimonial} from "types/testimonial"
import {Video} from "types/video"

const mockPosts: Post[] = [
    {
        html: "<p>This is the first test post.</p>",
        frontmatter: {
            date: "2021-01-01",
            slug: "first-test-post",
            title: "first test post",
            topic: "life",
        },
    },
    {
        html: "<p>This is the second test post.</p>",
        frontmatter: {
            date: "2021-02-01",
            slug: "second-test-post",
            title: "second test post",
            topic: "tech",
        },
    },
    {
        html: "<p>This is the third test post.</p>",
        frontmatter: {
            date: "2021-03-01",
            slug: "third-test-post",
            title: "third test post",
            topic: "coding",
        },
    },
    {
        html: "<p>This is the fourth test post.</p>",
        frontmatter: {
            date: "2021-03-01",
            slug: "fourth-test-post",
            title: "fourth test post",
            topic: "coding",
        },
    },
]

const mockSortedPosts: Post[] = [
    mockPosts[2],
    mockPosts[3],
    mockPosts[1],
    mockPosts[0],
]

const mockPostsFrontmatter: PostFrontmatter[] = mockPosts.map(
    mockPost => mockPost.frontmatter,
)

const mockSortedPostsFrontmatter: PostFrontmatter[] = mockSortedPosts.map(
    mockPost => mockPost.frontmatter,
)

const mockPost: Post = mockPosts[0]

const mockPostFrontmatter: PostFrontmatter = mockPost.frontmatter

const mockMeta: Meta = {
    siteUrl: "https://bradgarropy.com",
}

const mockVideos: Video[] = [
    {
        id: "abc123",
        title: "first test video",
        thumbnail: "https://youtube.com/first.jpg",
    },
    {
        id: "def456",
        title: "second test video",
        thumbnail: "https://youtube.com/second.jpg",
    },
]

const mockProjects: Project[] = [
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

const mockSponsors: Sponsors = {
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

const mockChannelStatus = {isLive: true}

const mockHireMe: Markdown = {
    html: "<p>hire me</p>",
    frontmatter: {},
}

const mockContact: Markdown = {
    html: "<p>contact</p>",
    frontmatter: {},
}

const mockResume: Markdown = {
    html: "<p>resume</p>",
    frontmatter: {},
}

const mockTestimonials: Testimonial[] = [
    {
        html: "<p>First test review.</p>",
        frontmatter: {
            name: "First Test User",
            profile: "https://twitter.com/first-test-user",
            photo: "https://twitter.com/first-test-user.jpg",
        },
    },
    {
        html: "<p>Second test review.</p>",
        frontmatter: {
            name: "Second Test User",
            profile: "https://twitter.com/second-test-user",
            photo: "https://twitter.com/second-test-user.jpg",
        },
    },
]

const mockTestimonial: Testimonial = mockTestimonials[0]

const mockNows: Now[] = [
    {
        html: "<p>This is a newer now.</p>",
        frontmatter: {
            date: "2021-01-01",
        },
    },
    {
        html: "<p>This is a now.</p>",
        frontmatter: {
            date: "2020-12-31",
        },
    },
    {
        html: "<p>This is an older now.</p>",
        frontmatter: {
            date: "2020-12-30",
        },
    },
]

const mockNowsFrontmatter: NowFrontmatter[] = mockNows.map(
    mockNow => mockNow.frontmatter,
)

const mockNow: Now = mockNows[1]

const mockNewerNow: Now = mockNows[0]

const mockOlderNow: Now = mockNows[2]

const mockTopics: Topic[] = [
    {
        icon: "😎",
        name: "life",
    },
    {
        icon: "🔌",
        name: "tech",
    },
    {
        icon: "💻",
        name: "coding",
    },
]

const mockTopic: Topic = mockTopics[0]

const mockRepositoryTopics: string[] = [
    "gatsby",
    "javascript",
    "next",
    "node",
    "react",
    "svelte",
    "tailwind",
    "typescript",
    "blog",
    "portfolio",
]

const mockUses: Markdown = {
    html: "<p>uses</p>",
    frontmatter: {},
}

export {
    mockChannelStatus,
    mockContact,
    mockHireMe,
    mockMeta,
    mockNewerNow,
    mockNow,
    mockNows,
    mockNowsFrontmatter,
    mockOlderNow,
    mockPost,
    mockPostFrontmatter,
    mockPosts,
    mockPostsFrontmatter,
    mockProjects,
    mockRepositoryTopics,
    mockResume,
    mockSortedPosts,
    mockSortedPostsFrontmatter,
    mockSponsors,
    mockTestimonial,
    mockTestimonials,
    mockTopic,
    mockTopics,
    mockUses,
    mockVideos,
}
