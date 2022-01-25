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

export {mockTestimonialsPaths, mockTestimonialsResponse, mockYoutubeResponse}
