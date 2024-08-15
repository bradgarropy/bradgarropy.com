import {readdirSync} from "node:fs"

import {expect, test, vi} from "vitest"

import {
    mockPostsFrontmatter,
    mockSortedPostsFrontmatter,
    mockTopic,
    mockTopics,
} from "~/test-utils/mocks"
import * as markdown from "~/utils/markdown.server"
import {
    getLatestPost,
    getPostBySlug,
    getPosts,
    getPostsByTag,
    getPostsByTopic,
    getRelatedPosts,
    getTags,
    getTopic,
    getTopics,
    sortPostsByDate,
} from "~/utils/posts"

const mockMarkdown = vi.spyOn(markdown, "transformMarkdown")

test("gets posts", async () => {
    const posts = getPosts()

    const files = readdirSync("content/posts")
    expect(posts).toHaveLength(files.length)

    expect(posts).toContainEqual(
        expect.objectContaining({
            title: "⌨️ i am a developer",
            slug: "i-am-a-developer",
            date: "2018-08-05",
            topic: "coding",
            tags: ["thoughts"],
        }),
    )
})

test("gets latest post", () => {
    const post = getLatestPost()

    expect(post).toMatchObject({
        title: expect.any(String),
        slug: expect.any(String),
        date: expect.any(String),
        topic: expect.any(String),
        tags: expect.arrayContaining([expect.any(String)]),
    })
})

test("gets particular number of posts", () => {
    const posts = getPosts(2)
    expect(posts).toHaveLength(2)
})

test("gets post by slug", async () => {
    mockMarkdown.mockResolvedValueOnce("This is the first test post.")

    const post = await getPostBySlug("i-am-a-developer")

    expect(post).toEqual({
        html: expect.any(String),
        frontmatter: {
            title: "⌨️ i am a developer",
            slug: "i-am-a-developer",
            date: "2018-08-05",
            topic: "coding",
            tags: ["thoughts"],
        },
    })
})

test("gets topic", () => {
    const topic = getTopic("tech")
    expect(topic).toEqual(mockTopic)
})

test("gets topics", () => {
    const topics = getTopics()
    expect(topics).toEqual(mockTopics)
})

test("gets posts by topic", () => {
    const posts = getPostsByTopic("life")

    expect(posts.length).toBeGreaterThanOrEqual(19)
    expect(posts).toContainEqual(
        expect.objectContaining({
            title: "🔜 stuff coming soon",
            slug: "stuff-coming-soon",
            date: "2018-08-03",
            topic: "life",
            tags: [],
        }),
    )
})

test("gets tags", () => {
    const tags = getTags()
    expect(tags).toContain("thoughts")
    expect(tags).toContain("goals")
})

test("gets posts by tag", () => {
    const posts = getPostsByTag("thoughts")

    expect(posts).toHaveLength(4)

    expect(posts).toContainEqual(
        expect.objectContaining({
            title: "⌨️ i am a developer",
            slug: "i-am-a-developer",
            date: "2018-08-05",
            topic: "coding",
            tags: ["thoughts"],
        }),
    )
})

test("sorts posts by date", () => {
    const unsortedPosts = [
        mockPostsFrontmatter[1],
        mockPostsFrontmatter[0],
        mockPostsFrontmatter[2],
        mockPostsFrontmatter[3],
    ]

    const sortedPosts = sortPostsByDate(unsortedPosts)
    expect(sortedPosts).toEqual(mockSortedPostsFrontmatter)
})

test("gets related posts", () => {
    const relatedPosts = getRelatedPosts({
        date: "2021-12-05",
        slug: "think-bigger",
        tags: ["thoughts"],
        title: "💡 think bigger",
        topic: "life",
    })

    expect(relatedPosts).toContainEqual(
        expect.objectContaining({
            date: "2020-12-08",
            slug: "communication-comes-first",
            tags: ["thoughts"],
            title: "🥇 communication comes first",
            topic: "life",
        }),
    )

    expect(relatedPosts).toContainEqual(
        expect.objectContaining({
            date: "2020-12-08",
            slug: "communication-comes-first",
            tags: ["thoughts"],
            title: "🥇 communication comes first",
            topic: "life",
        }),
    )
})
