import {expect, test, vi} from "vitest"

import {mockPosts} from "~/test-utils/mocks"
import {generateFeed} from "~/utils/feed"
import * as posts from "~/utils/posts"

const getPostsSpy = vi.spyOn(posts, "getPosts")
getPostsSpy.mockResolvedValue(mockPosts)

test("generates xml feed", async () => {
    const feed = await generateFeed("xml")

    expect(feed).toContain("<title>bradgarropy.com</title>")
    expect(feed).toContain("<link>https://bradgarropy.com</link>")

    mockPosts.forEach(post => {
        expect(feed).toContain(
            `<title><![CDATA[${post.frontmatter.title}]]></title>`,
        )

        expect(feed).toContain(
            `<link>https://bradgarropy.com/blog/${post.frontmatter.slug}</link>`,
        )

        expect(feed).toContain(`<guid>${post.frontmatter.slug}</guid>`)

        expect(feed).toContain(
            "<author>bradgarropy@gmail.com (Brad Garropy)</author>",
        )
    })
})

test("generates json feed", async () => {
    const feed = await generateFeed("json")

    expect(JSON.parse(feed)).toEqual({
        version: "https://jsonfeed.org/version/1",
        title: "bradgarropy.com",
        home_page_url: "https://bradgarropy.com",
        feed_url: "https://bradgarropy.com/feed.json",
        icon: "https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/social/facebook.png",
        author: {
            name: "Brad Garropy",
            url: "https://twitter.com/bradgarropy",
        },
        items: [
            {
                id: "first-test-post",
                url: "https://bradgarropy.com/blog/first-test-post",
                title: "first test post",
                date_modified: "2021-01-01T00:00:00.000Z",
                date_published: "2021-01-01T00:00:00.000Z",
                author: {
                    name: "Brad Garropy",
                    url: "https://twitter.com/bradgarropy",
                },
                content_html: "<p>This is the first test post.</p>",
            },
            {
                id: "second-test-post",
                url: "https://bradgarropy.com/blog/second-test-post",
                title: "second test post",
                date_modified: "2021-02-01T00:00:00.000Z",
                date_published: "2021-02-01T00:00:00.000Z",
                author: {
                    name: "Brad Garropy",
                    url: "https://twitter.com/bradgarropy",
                },
                content_html: "<p>This is the second test post.</p>",
            },
            {
                id: "third-test-post",
                url: "https://bradgarropy.com/blog/third-test-post",
                title: "third test post",
                date_modified: "2021-03-01T00:00:00.000Z",
                date_published: "2021-03-01T00:00:00.000Z",
                author: {
                    name: "Brad Garropy",
                    url: "https://twitter.com/bradgarropy",
                },
                content_html: "<p>This is the third test post.</p>",
            },
            {
                id: "fourth-test-post",
                url: "https://bradgarropy.com/blog/fourth-test-post",
                title: "fourth test post",
                date_modified: "2021-03-01T00:00:00.000Z",
                date_published: "2021-03-01T00:00:00.000Z",
                author: {
                    name: "Brad Garropy",
                    url: "https://twitter.com/bradgarropy",
                },
                content_html: "<p>This is the fourth test post.</p>",
            },
        ],
    })
})
