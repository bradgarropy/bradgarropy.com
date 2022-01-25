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

const mockTestimonialsPaths = ["first.md", "second.md"]

const mockTestimonialsResponse = [
    {
        data: {
            name: "First Test User",
            profile: "https://twitter.com/first-test-user",
            photo: "https://twitter.com/first-test-user.jpg",
        },
        content: "First test review.",
    },
    {
        data: {
            name: "Second Test User",
            profile: "https://twitter.com/second-test-user",
            photo: "https://twitter.com/second-test-user.jpg",
        },
        content: "Second test review.",
    },
]

const mockGitHubResponse = {
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
            ],
        },
    },
}

export {
    mockGitHubResponse,
    mockTestimonialsPaths,
    mockTestimonialsResponse,
    mockYoutubeResponse,
}
