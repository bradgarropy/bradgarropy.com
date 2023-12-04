import {http} from "@bradgarropy/http"

import type {Video} from "~/types/video"

type YouTubeSearchResponse = {
    kind: string
    etag: string
    nextPageToken: string
    regionCode: string
    pageInfo: PageInfo
    items: {
        kind: string
        etag: string
        id: {
            kind: string
            videoId: string
        }
        snippet: Snippet
    }[]
    error?: Error
}

type Error = {
    code: number
    message: string
    errors: {
        message: string
        domain: string
        reason: string
    }
}

type PageInfo = {
    totalResults: number
    resultsPerPage: number
}

type Snippet = {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
        default: Thumbnail
        medium: Thumbnail
        high: Thumbnail
    }
    channelTitle: string
    liveBroadcastContent: string
    publishTime: string
}

type Thumbnail = {
    url: string
    width: number
    height: number
}

const getLatestVideo = async (): Promise<Video> => {
    const latestVideos = await getLatestVideos(1)
    const latestVideo = latestVideos[0]

    return latestVideo
}

const getLatestVideos = async (count = 2): Promise<Video[]> => {
    const response = await http.get<YouTubeSearchResponse>(
        "https://www.googleapis.com/youtube/v3/search",
        {
            headers: {"Cache-Control": "public, s-maxage=86400"},
            params: {
                key: process.env.YOUTUBE_API_KEY,
                channelId: "UCgbFhcZKt36Upo7oxWlLEig",
                maxResults: count,
                part: "snippet",
                order: "date",
                type: "video",
            },
        },
    )

    if (response.error?.code === 403) {
        return []
    }

    const videos: Video[] = response.items.map(item => {
        const video: Video = {
            id: item.id.videoId,
            thumbnail: item.snippet.thumbnails.default.url.replace(
                "default.jpg",
                "maxresdefault.jpg",
            ),
            title: item.snippet.title,
        }

        return video
    })

    return videos
}

export {getLatestVideo, getLatestVideos}
