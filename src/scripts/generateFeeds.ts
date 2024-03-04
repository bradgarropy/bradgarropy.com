import {writeFile} from "node:fs/promises"

import {generateFeed} from "~/utils/feed"

const generate = async () => {
    const json = await generateFeed("json")
    const xml = await generateFeed("xml")

    await writeFile("public/rss/feed.json", json)
    await writeFile("public/rss/feed.xml", xml)
}

generate()
