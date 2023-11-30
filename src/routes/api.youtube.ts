import {json} from "@remix-run/node"

import {getLatestVideos} from "~/utils/videos"

export const loader = async () => {
    const latestVideos = await getLatestVideos()
    const headers = {"Cache-Control": "public, s-max-age=86400"}

    return json({latestVideos}, {headers})
}
