import {http} from "@bradgarropy/http"
import TTLCache from "@isaacs/ttlcache"

import type {Video} from "~/types/video"

const videoCache = new TTLCache<"videos", Video[]>({
    max: 1,
    ttl: 1000 * 60 * 60, // 1 hour
})

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

// Do not call this function now, I'm trying to figure out a way to
// cache the response so I don't hit the quota limit.
//
// Check the quota limit here:
// https://console.cloud.google.com/apis/api/youtube.googleapis.com/quotas
const getLatestVideos = async (count = 2): Promise<Video[]> => {
    console.log("getLatestVideos")

    const cachedVideos = videoCache.get("videos")

    if (cachedVideos) {
        console.log("video cache hit")
        console.log(videoCache.getRemainingTTL("videos"))
        return cachedVideos
    } else {
        console.log("video cache miss")
    }

    const response = await http.get<YouTubeSearchResponse>(
        "https://www.googleapis.com/youtube/v3/search",
        {
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
        console.log("youtube quota limit reached")
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

    console.log("updated video cache")
    videoCache.set("videos", videos)
    return videos
}

export {getLatestVideo, getLatestVideos, videoCache}
