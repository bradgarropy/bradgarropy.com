import TTLCache from "@isaacs/ttlcache"
import {Feed} from "feed"

import {createImageUrl} from "~/utils/cloudinary"
import {getPosts} from "~/utils/posts"

type FeedType = "xml" | "json"

const feedCache = new TTLCache<"feed", Feed>({
    max: 1,
    ttl: 1000 * 60 * 60 * 24, // 1 day
})

const generateFeed = async (type: FeedType) => {
    const cachedFeed = feedCache.get("feed")

    if (cachedFeed) {
        console.log("feed cache hit")
        console.log(feedCache.getRemainingTTL("feed"))

        switch (type) {
            case "xml": {
                return cachedFeed.rss2()
            }

            case "json": {
                return cachedFeed.json1()
            }
        }
    }

    console.log("feed cache miss")

    const feed = new Feed({
        title: "bradgarropy.com",
        id: "https://bradgarropy.com",
        link: "https://bradgarropy.com",
        language: "en",
        image: createImageUrl("/social/facebook.png"),
        favicon: createImageUrl("/site/favicon.png"),
        copyright: `© ${new Date().getFullYear()} Brad Garropy`,
        feedLinks: {
            rss: "https://bradgarropy.com/feed.xml",
            json: "https://bradgarropy.com/feed.json",
        },
        author: {
            name: "Brad Garropy",
            email: "bradgarropy@gmail.com",
            link: "https://twitter.com/bradgarropy",
        },
    })

    const posts = getPosts()

    posts.forEach(post => {
        feed.addItem({
            author: [
                {
                    name: "Brad Garropy",
                    email: "bradgarropy@gmail.com",
                    link: "https://twitter.com/bradgarropy",
                },
            ],
            copyright: `© ${new Date().getFullYear()} Brad Garropy`,
            date: new Date(`${post.date}T00:00:00.000Z`),
            id: post.slug,
            link: `https://bradgarropy.com/blog/${post.slug}`,
            published: new Date(`${post.date}T00:00:00.000Z`),
            title: post.title,
        })
    })

    console.log("updated feed cache")
    feedCache.set("feed", feed)

    switch (type) {
        case "xml": {
            return feed.rss2()
        }

        case "json": {
            return feed.json1()
        }
    }
}

export {feedCache, generateFeed}
