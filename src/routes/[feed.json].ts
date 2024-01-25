import {generateFeed} from "~/utils/feed"

export const loader = () => {
    const feed = generateFeed("json")

    return new Response(feed, {
        headers: {
            "content-type": "application/json",
        },
    })
}
