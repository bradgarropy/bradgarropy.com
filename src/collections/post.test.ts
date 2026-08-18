import {expect, test} from "vitest"

import {createPostCollection} from "~/collections/post"
import {generatePostFile} from "~/test-utils/generators"

const mockFiles = {
    "/content/posts/older-post.md": {
        markdown: "Older post.",
        attributes: {
            date: "2025-01-01",
            slug: "older-post",
            tags: [],
            title: "Older post",
            topic: "life",
        },
    },
    "/content/posts/newer-post.md": {
        markdown: "Newer post.",
        attributes: {
            date: "2026-01-01",
            slug: "newer-post",
            tags: ["testing"],
            title: "Newer post",
            topic: "coding",
        },
    },
}

const mockNewerFile = mockFiles["/content/posts/newer-post.md"]
const mockOlderFile = mockFiles["/content/posts/older-post.md"]

const mockNewerPost = {
    path: "/content/posts/newer-post.md",
    markdown: mockNewerFile.markdown,
    frontmatter: mockNewerFile.attributes,
}

const mockOlderPost = {
    path: "/content/posts/older-post.md",
    markdown: mockOlderFile.markdown,
    frontmatter: mockOlderFile.attributes,
}

test("gets all posts", () => {
    const posts = createPostCollection(mockFiles).getAll()
    expect(posts).toEqual([mockNewerPost, mockOlderPost])
})

test("gets post by slug", () => {
    const postCollection = createPostCollection(mockFiles)
    const post = postCollection.getBySlug("older-post")

    expect(post).toEqual(mockOlderPost)
})

test("returns null when post does not exist", () => {
    const postCollection = createPostCollection(mockFiles)
    const post = postCollection.getBySlug("missing-post")

    expect(post).toBeNull()
})

test("gets latest post", () => {
    const postCollection = createPostCollection(mockFiles)
    const post = postCollection.getLatest()

    expect(post).toMatchObject(mockNewerPost)
})

test("returns null when latest post does not exist", () => {
    const postCollection = createPostCollection({})
    const post = postCollection.getLatest()

    expect(post).toBeNull()
})

test("does not expose internal posts", () => {
    const postCollection = createPostCollection(mockFiles)
    const posts = postCollection.getAll()

    posts.pop()

    const newPosts = postCollection.getAll()
    expect(newPosts).toHaveLength(2)
})

test("rejects invalid frontmatter", () => {
    const mockPostFile = generatePostFile({
        date: "invalid-date",
        slug: "invalid-post",
    })

    const invalidFiles = {
        "/content/posts/invalid-post.md": mockPostFile,
    }

    expect(() => createPostCollection(invalidFiles)).toThrow()
})

test("rejects missing filename", () => {
    const mockPostFile = generatePostFile()

    const invalidFiles = {
        "/": mockPostFile,
    }

    expect(() => createPostCollection(invalidFiles)).toThrow(
        "Could not determine filename from /.",
    )
})

test("rejects non-markdown filename", () => {
    const mockPostFile = generatePostFile()

    const invalidFiles = {
        "/content/posts/invalid-post.txt": mockPostFile,
    }

    expect(() => createPostCollection(invalidFiles)).toThrow(
        "Post filename must end in .md: /content/posts/invalid-post.txt.",
    )
})

test("rejects mismatched slug", () => {
    const mockPostFile = generatePostFile({
        slug: "received-slug",
    })

    const invalidFiles = {
        "/content/posts/expected-slug.md": mockPostFile,
    }

    expect(() => createPostCollection(invalidFiles)).toThrow(
        'Invalid slug in /content/posts/expected-slug.md: expected "expected-slug", received "received-slug".',
    )
})

test("rejects duplicate slug", () => {
    const mockPostFile = generatePostFile({slug: "duplicate-post"})

    const invalidFiles = {
        "/content/posts/first/duplicate-post.md": mockPostFile,
        "/content/posts/second/duplicate-post.md": mockPostFile,
    }

    expect(() => createPostCollection(invalidFiles)).toThrow(
        'Duplicate post slug "duplicate-post" in /content/posts/first/duplicate-post.md and /content/posts/second/duplicate-post.md.',
    )
})
