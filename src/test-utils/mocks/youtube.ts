const mockYoutubeResponse = {
    items: [
        {
            snippet: {
                resourceId: {
                    videoId: "abc123",
                },
                thumbnails: {
                    default: {
                        url: "https://youtube.com/first.jpg",
                    },
                },
                title: "first test video",
            },
        },
        {
            snippet: {
                resourceId: {
                    videoId: "def456",
                },
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

const mockYoutubeVideosResponse = {
    items: [{id: "abc123"}, {id: "def456"}],
}

const mockYoutubeLiveVideosResponse = {
    items: [
        {
            id: "abc123",
            liveStreamingDetails: {
                actualStartTime: "2025-01-01T00:00:00Z",
            },
        },
        {id: "def456"},
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

export {
    mockYoutubeErrorResponse,
    mockYoutubeLiveVideosResponse,
    mockYoutubeResponse,
    mockYoutubeVideosResponse,
}
