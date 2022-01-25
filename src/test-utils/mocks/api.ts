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

export {mockYoutubeResponse}
