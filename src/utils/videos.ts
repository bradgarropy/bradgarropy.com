import {http} from "@bradgarropy/http"
import {TTLCache} from "@isaacs/ttlcache"

import type {Video} from "~/types/video"

const YOUTUBE_PLAYLIST_ID = "UUgbFhcZKt36Upo7oxWlLEig"
const YOUTUBE_RESULTS_COUNT = 50

const videoCache = new TTLCache<"videos", Video[]>({
    max: 1,
    ttl: 1000 * 60 * 60, // 1 hour
})

type YouTubePlaylistResponse = {
    items: {
        snippet: {
            title: string
            thumbnails: {
                default: Thumbnail
            }
            resourceId: {
                videoId: string
            }
        }
    }[]
    error?: YouTubeError
}

type YouTubeVideosResponse = {
    items: {
        id: string
        liveStreamingDetails?: Record<string, unknown>
    }[]
    error?: YouTubeError
}

type Thumbnail = {
    url: string
    width: number
    height: number
}

type YouTubeError = {
    code: number
    message: string
    errors: {
        message: string
        domain: string
        reason: string
    }
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

    const playlistResponse = await http.get<YouTubePlaylistResponse>(
        "https://www.googleapis.com/youtube/v3/playlistItems",
        {
            params: {
                key: process.env.YOUTUBE_API_KEY,
                maxResults: YOUTUBE_RESULTS_COUNT,
                part: "snippet",
                playlistId: YOUTUBE_PLAYLIST_ID,
            },
        },
    )

    if (playlistResponse.error?.code === 403) {
        console.log("youtube quota limit reached")
        return []
    }

    const videoIds = playlistResponse.items.map(item => {
        return item.snippet.resourceId.videoId
    })

    const videosResponse = await http.get<YouTubeVideosResponse>(
        "https://www.googleapis.com/youtube/v3/videos",
        {
            params: {
                id: videoIds.join(","),
                key: process.env.YOUTUBE_API_KEY,
                part: "liveStreamingDetails",
            },
        },
    )

    const liveVideoIds = new Set(
        videosResponse.items
            .filter(video => video.liveStreamingDetails)
            .map(video => video.id),
    )

    const videos: Video[] = playlistResponse.items
        .filter(item => {
            return !liveVideoIds.has(item.snippet.resourceId.videoId)
        })
        .slice(0, count)
        .map(item => {
            const video: Video = {
                id: item.snippet.resourceId.videoId,
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
