import {generateFeed} from "~/utils/feed"

export const loader = () => {
    const feed = generateFeed("xml")

    return new Response(feed, {
        headers: {
            "content-type": "application/xml",
        },
    })
}
