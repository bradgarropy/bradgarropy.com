import matter from "gray-matter"
import type {Mock} from "vitest"
import {describe, expect, test, vi} from "vitest"

import {getMarkdownBySlug, transformMarkdown} from "~/utils/markdown.server"

vi.mock("gray-matter")

const mockFetch = vi.fn()
global.fetch = mockFetch

mockFetch.mockResolvedValue({
    json: () => Promise.resolve({output: {width: 100, height: 100}}),
})

test("gets markdown by slug", async () => {
    const mockMatter = matter.read as Mock
    mockMatter.mockReturnValue({data: {}, content: "This is the uses page."})

    const markdown = await getMarkdownBySlug("uses")

    expect(markdown).toEqual({
        frontmatter: {},
        html: "<p>This is the uses page.</p>",
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
            // eslint-disable-next-line quotes
            '<a href="https://bradgarropy.com/profile.jpg"><img src="https://bradgarropy.com/profile.jpg" alt="brad garropy"></a>',
        )
    })

    test("adds dimensions to cloudinary images", async () => {
        let html

        html = await transformMarkdown(
            "![brad garropy](http://res.cloudinary.com/profile.jpg)",
        )

        expect(html).toEqual(
            // eslint-disable-next-line quotes
            '<a href="http://res.cloudinary.com/profile.jpg"><img src="http://res.cloudinary.com/profile.jpg" alt="brad garropy" width="100" height="100"></a>',
        )

        html = await transformMarkdown(
            "![brad garropy](https://res.cloudinary.com/profile.jpg)",
        )

        expect(html).toEqual(
            // eslint-disable-next-line quotes
            '<a href="https://res.cloudinary.com/profile.jpg"><img src="https://res.cloudinary.com/profile.jpg" alt="brad garropy" width="100" height="100"></a>',
        )
    })

    test("does not add dimensions to other images", async () => {
        const html = await transformMarkdown(
            "![brad garropy](https://bradgarropy.com/profile.jpg)",
        )

        expect(html).toEqual(
            // eslint-disable-next-line quotes
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
                // eslint-disable-next-line quotes
                'src="https://codesandbox.io/embed/exciting-pascal-j5hwu"',
            ),
        )
    })

    test("embeds twitch", async () => {
        const html = await transformMarkdown("https://twitch.tv/bradgarropy")

        expect(html).toEqual(
            // eslint-disable-next-line quotes
            expect.stringContaining("<iframe"),
        )

        expect(html).toEqual(
            expect.stringContaining(
                // eslint-disable-next-line quotes
                'src="https://player.twitch.tv?channel=bradgarropy&#x26;parent=bradgarropy.com"',
            ),
        )
    })

    test("embeds twitter", async () => {
        const html = await transformMarkdown(
            "https://twitter.com/bradgarropy/status/1458449938157801490",
        )

        expect(html).toEqual(
            // eslint-disable-next-line quotes
            expect.stringContaining('<div class="grid justify-center">'),
        )

        expect(html).toEqual(
            // eslint-disable-next-line quotes
            expect.stringContaining('<blockquote class="twitter-tweet">'),
        )

        expect(html).toEqual(
            expect.stringContaining(
                // eslint-disable-next-line quotes
                '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8">',
            ),
        )
    })

    test("embeds youtube", async () => {
        const html = await transformMarkdown("https://youtu.be/9zcU6oUOHVc")

        expect(html).toEqual(expect.stringContaining("<iframe"))

        // eslint-disable-next-line quotes
        expect(html).toEqual(expect.stringContaining('title="9zcU6oUOHVc"'))

        expect(html).toEqual(
            expect.stringContaining(
                // eslint-disable-next-line quotes
                'src="https://www.youtube-nocookie.com/embed/9zcU6oUOHVc"',
            ),
        )
    })

    test("opens external links in new tabs", async () => {
        const html = await transformMarkdown(
            "This is an [external link](https://example.com).",
        )

        expect(html).toEqual(
            expect.stringContaining(
                // eslint-disable-next-line quotes
                '<a href="https://example.com" target="_blank" rel="noopener noreferrer">external link</a>',
            ),
        )
    })
})
