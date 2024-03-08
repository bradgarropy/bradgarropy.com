import {readdirSync, readFileSync} from "node:fs"

import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import {
    mockPost,
    mockPostFrontmatter,
    mockPosts,
    mockPostsFrontmatter,
    mockPostsPaths,
    mockSortedPostsFrontmatter,
    mockTopic,
    mockTopics,
} from "~/test-utils/mocks"
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

vi.mock("node:fs")

test("gets latest post", () => {
    const mockReadDirSync = readdirSync as Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const post = getLatestPost()
    expect(post).toEqual(mockSortedPostsFrontmatter[0])
})

test("gets latest posts", () => {
    const mockReadDirSync = readdirSync as Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const posts = getPosts(3)
    expect(posts).toEqual(mockSortedPostsFrontmatter.slice(0, 3))
})

test("gets particular number of latest posts", () => {
    const mockReadDirSync = readdirSync as Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const posts = getPosts(2)
    expect(posts).toEqual(mockSortedPostsFrontmatter.slice(0, 2))
})

test("gets all posts", () => {
    const mockReadDirSync = readdirSync as Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const posts = getPosts()
    expect(posts).toEqual(mockSortedPostsFrontmatter)
})

test("gets post by slug", async () => {
    const mockReadFileSync = readFileSync as Mock
    mockReadFileSync.mockReturnValue("{}")

    const post = await getPostBySlug("first-test-post")
    expect(post).toEqual(mockPost)
})

test("gets topic", () => {
    const mockReadDirSync = readdirSync as Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const topic = getTopic("life")
    expect(topic).toEqual(mockTopic)
})

test("gets topics", () => {
    const mockReadDirSync = readdirSync as Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const topics = getTopics()
    expect(topics).toEqual(mockTopics)
})

test("gets posts by topic", () => {
    const mockReadDirSync = readdirSync as Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const post = getPostsByTopic("life")
    expect(post).toEqual([mockPostFrontmatter])
})

test("gets tags", () => {
    const mockReadDirSync = readdirSync as Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const tags = getTags()
    expect(tags).toEqual(mockPosts[3].frontmatter.tags)
})

test("gets posts by tag", () => {
    const mockReadDirSync = readdirSync as Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const post = getPostsByTag("third-tag")
    expect(post).toEqual(mockPostsFrontmatter.slice(2))
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
    const mockReadDirSync = readdirSync as Mock
    mockReadDirSync.mockReturnValue(mockPostsPaths)

    const relatedPosts = getRelatedPosts(mockPostsFrontmatter[1])

    expect(relatedPosts).toEqual([
        mockPostsFrontmatter[3],
        mockPostsFrontmatter[2],
    ])
})

test("gets posts", async () => {
    const posts = await getPosts()
    expect(posts).toEqual(mockPosts)
})
