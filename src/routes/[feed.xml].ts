import {generateFeed} from "~/utils/feed"

export const loader = async () => {
    const feed = await generateFeed("xml")
    return new Response(feed, {headers: {"Content-Type": "application/xml"}})
}
