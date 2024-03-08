import {generateFeed} from "~/utils/feed"

export const loader = async () => {
    const feed = await generateFeed("json")
    return new Response(feed, {headers: {"Content-Type": "application/json"}})
}
