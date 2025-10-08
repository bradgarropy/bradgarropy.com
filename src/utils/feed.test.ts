import {afterEach, expect, test} from "vitest"

import {feedCache, generateFeed} from "~/utils/feed"
import {getPosts} from "~/utils/posts"

afterEach(() => {
    feedCache.clear()
})

test("generates xml feed", async () => {
    const feed = await generateFeed("xml")
    const posts = getPosts()

    expect(feed).toContain("<title>bradgarropy.com</title>")
    expect(feed).toContain("<link>https://bradgarropy.com</link>")

    posts.forEach(post => {
        expect(feed).toContain(`<title><![CDATA[${post.title}]]></title>`)

        expect(feed).toContain(
            `<link>https://bradgarropy.com/blog/${post.slug}</link>`,
        )

        expect(feed).toContain(`<guid isPermaLink="false">${post.slug}</guid>`)

        expect(feed).toContain(
            "<author>bradgarropy@gmail.com (Brad Garropy)</author>",
        )
    })
})

test("generates json feed", async () => {
    const feed = await generateFeed("json")
    const parsedFeed = JSON.parse(feed)

    expect(parsedFeed).toMatchObject({
        version: "https://jsonfeed.org/version/1",
        title: "bradgarropy.com",
        home_page_url: "https://bradgarropy.com",
        feed_url: "https://bradgarropy.com/feed.json",
        icon: "https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/social/facebook.png",
        author: {
            name: "Brad Garropy",
            url: "https://twitter.com/bradgarropy",
        },
        items: expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(String),
                url: expect.any(String),
                title: expect.any(String),
                date_modified: expect.any(String),
                date_published: expect.any(String),
                author: {
                    name: expect.any(String),
                    url: expect.any(String),
                },
            }),
        ]),
    })
})

test("caches json feed", async () => {
    expect(feedCache.get("feed")).toBeUndefined()

    const feed = await generateFeed("json")
    expect(feed).toContain('"title": "bradgarropy.com"')
    expect(feed).not.toBeUndefined()

    const cachedFeed = await generateFeed("json")
    expect(cachedFeed).toEqual(feed)
})

test("caches xml feed", async () => {
    expect(feedCache.get("feed")).toBeUndefined()

    const feed = await generateFeed("xml")

    expect(feed).not.toBeUndefined()
    expect(feed).toContain("<title>bradgarropy.com</title>")

    const cachedFeed = await generateFeed("xml")
    expect(cachedFeed).toEqual(feed)
})
