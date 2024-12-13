import {describe, expect, test, vi} from "vitest"

import {getMarkdownBySlug, transformMarkdown} from "~/utils/markdown.server"

const mockFetch = vi.fn()
global.fetch = mockFetch

mockFetch.mockResolvedValue({
    json: () => Promise.resolve({output: {width: 100, height: 100}}),
})

test("gets markdown by slug", async () => {
    const markdown = await getMarkdownBySlug("uses")

    expect(markdown).toEqual({
        frontmatter: {},
        html: expect.any(String),
    })
})

describe("transforms markdown", () => {
    test("supports gfm", async () => {
        const html = await transformMarkdown("~~nope~~")
        expect(html).toEqual("<p><del>nope</del></p>")
    })

    test("unwraps images", async () => {
        const html = await transformMarkdown(
            "![brad garropy](https://bradgarropy.com/profile.jpg)",
        )

        expect(html).toEqual(
            '<a href="https://bradgarropy.com/profile.jpg"><img src="https://bradgarropy.com/profile.jpg" alt="brad garropy"></a>',
        )
    })

    test("adds dimensions to cloudinary images", async () => {
        let html

        html = await transformMarkdown(
            "![brad garropy](http://res.cloudinary.com/profile.jpg)",
        )

        expect(html).toEqual(
            '<a href="http://res.cloudinary.com/profile.jpg"><img src="http://res.cloudinary.com/profile.jpg" alt="brad garropy" width="100" height="100"></a>',
        )

        html = await transformMarkdown(
            "![brad garropy](https://res.cloudinary.com/profile.jpg)",
        )

        expect(html).toEqual(
            '<a href="https://res.cloudinary.com/profile.jpg"><img src="https://res.cloudinary.com/profile.jpg" alt="brad garropy" width="100" height="100"></a>',
        )
    })

    test("does not add dimensions to other images", async () => {
        const html = await transformMarkdown(
            "![brad garropy](https://bradgarropy.com/profile.jpg)",
        )

        expect(html).toEqual(
            '<a href="https://bradgarropy.com/profile.jpg"><img src="https://bradgarropy.com/profile.jpg" alt="brad garropy"></a>',
        )
    })

    test("adds optimizations to cloudinary images", async () => {
        const html = await transformMarkdown(
            "![brad garropy](https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/profile.jpg)",
        )

        expect(html).toEqual(
            '<a href="https://res.cloudinary.com/bradgarropy/image/upload/bradgarropy.com/profile.jpg"><img src="https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto,w_660,c_limit/bradgarropy.com/profile.jpg" alt="brad garropy" width="100" height="100"></a>',
        )
    })

    test("does not add optimizations to other images", async () => {
        const html = await transformMarkdown(
            "![brad garropy](https://bradgarropy.com/profile.jpg)",
        )

        expect(html).toEqual(
            '<a href="https://bradgarropy.com/profile.jpg"><img src="https://bradgarropy.com/profile.jpg" alt="brad garropy"></a>',
        )
    })

    test("embeds codesandbox", async () => {
        const html = await transformMarkdown(
            "https://codesandbox.io/s/exciting-pascal-j5hwu",
        )

        expect(html).toEqual(expect.stringContaining("<iframe"))

        expect(html).toEqual(
            expect.stringContaining(
                'src="https://codesandbox.io/embed/exciting-pascal-j5hwu"',
            ),
        )
    })

    test("embeds twitch", async () => {
        const html = await transformMarkdown("https://twitch.tv/bradgarropy")

        expect(html).toEqual(expect.stringContaining("<iframe"))

        expect(html).toEqual(
            expect.stringContaining(
                'src="https://player.twitch.tv?channel=bradgarropy&#x26;parent=bradgarropy.com"',
            ),
        )
    })

    test("embeds twitter", async () => {
        const html = await transformMarkdown(
            "https://twitter.com/bradgarropy/status/1458449938157801490",
        )

        expect(html).toEqual(
            expect.stringContaining('<div class="grid justify-center">'),
        )

        expect(html).toEqual(
            expect.stringContaining('<blockquote class="twitter-tweet">'),
        )

        expect(html).toEqual(
            expect.stringContaining(
                '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8">',
            ),
        )
    })

    test("embeds youtube", async () => {
        const html = await transformMarkdown("https://youtu.be/9zcU6oUOHVc")

        expect(html).toEqual(expect.stringContaining("<iframe"))

        expect(html).toEqual(expect.stringContaining('title="9zcU6oUOHVc"'))

        expect(html).toEqual(
            expect.stringContaining(
                'src="https://www.youtube-nocookie.com/embed/9zcU6oUOHVc"',
            ),
        )
    })

    test("opens external links in new tabs", async () => {
        const html = await transformMarkdown(
            "This is an [external link](https://example.com).",
        )

        expect(html).toEqual(
            expect.stringContaining('<a href="https://example.com"'),
        )

        expect(html).toEqual(expect.stringContaining("external link</a>"))

        expect(html).toEqual(
            expect.stringContaining('rel="noopener noreferrer"'),
        )

        expect(html).toEqual(expect.stringContaining('target="_blank"'))
    })
})
