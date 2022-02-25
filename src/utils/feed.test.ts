import {existsSync, readFileSync, writeFileSync} from "fs"
import {mockPostsFrontmatter} from "test-utils/mocks"
import {generateFeed} from "utils/feed"
import {getAllPosts} from "utils/posts"

jest.mock("utils/posts")

jest.mock("gatsby-remark-vscode", () => {
    return {
        remarkPlugin: tree => tree,
    }
})

const mockGetAllPosts = getAllPosts as jest.Mock
mockGetAllPosts.mockReturnValue(mockPostsFrontmatter)

describe("generates feeds", () => {
    beforeAll(() => {
        writeFileSync("./public/feeds/junk.xml", "junk")
        generateFeed()
    })

    test("removes junk files", () => {
        expect(existsSync("./public/feeds/junk.xml")).toBeFalsy()
    })

    test("generates rss feed", () => {
        const rssFeed = readFileSync("./public/feeds/rss.xml", {
            encoding: "utf-8",
        })

        const containingStrings = [
            "<title>bradgarropy.com</title>",
            "<link>https://bradgarropy.com</link>",
            "<url>https://bradgarropy.com/facebook.png</url>",
            // eslint-disable-next-line quotes
            '<atom:link href="https://bradgarropy.com/feeds/rss.xml" rel="self" type="application/rss+xml"/>',
        ]

        containingStrings.forEach(string => {
            expect(rssFeed).toEqual(expect.stringContaining(string))
        })

        const matchingRegexes = [
            new RegExp(/<copyright>© \d{4} Brad Garropy<\/copyright>/),
        ]

        matchingRegexes.forEach(regex => {
            expect(rssFeed).toEqual(expect.stringMatching(regex))
        })
    })

    test("generates atom feed", () => {
        const atomFeed = readFileSync("./public/feeds/atom.xml", {
            encoding: "utf-8",
        })

        const containingStrings = [
            "<title>bradgarropy.com</title>",
            "<name>Brad Garropy</name>",
            "<email>bradgarropy@gmail.com</email>",
            "<uri>https://twitter.com/bradgarropy</uri>",
            // eslint-disable-next-line quotes
            '<link rel="alternate" href="https://bradgarropy.com"/>',
            // eslint-disable-next-line quotes
            '<link rel="self" href="https://bradgarropy.com/feeds/atom.xml"/>',
            "<logo>https://bradgarropy.com/facebook.png</logo>",
            "<icon>https://bradgarropy.com/favicon.png</icon>",
        ]

        containingStrings.forEach(string => {
            expect(atomFeed).toEqual(expect.stringContaining(string))
        })

        const matchingRegexes = [
            new RegExp(/<rights>© \d{4} Brad Garropy<\/rights>/),
        ]

        matchingRegexes.forEach(regex => {
            expect(atomFeed).toEqual(expect.stringMatching(regex))
        })
    })

    test("generates json feed", () => {
        const rawJsonFeed = readFileSync("./public/feeds/feed.json", {
            encoding: "utf-8",
        })

        const jsonFeed = JSON.parse(rawJsonFeed)

        expect(jsonFeed).toEqual(
            expect.objectContaining({
                title: "bradgarropy.com",
                home_page_url: "https://bradgarropy.com",
                feed_url: "https://bradgarropy.com/feeds/feed.json",
                icon: "https://bradgarropy.com/facebook.png",
                author: {
                    name: "Brad Garropy",
                    url: "https://twitter.com/bradgarropy",
                },
            }),
        )
    })
})
