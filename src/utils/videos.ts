import {http} from "@bradgarropy/http"
import {Video} from "types/video"

const getLatestVideos = async (): Promise<Video[]> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await http.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
            params: {
                key: process.env.YOUTUBE_API_KEY,
                channelId: "UCgbFhcZKt36Upo7oxWlLEig",
                maxResults: 2,
                part: "snippet",
                order: "date",
                type: "video",
            },
        },
    )

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

export {getLatestVideos}
