import {expect, test} from "vitest"

import {createPosts} from "~/collections/post"
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

test("creates posts", () => {
    const posts = createPosts(mockFiles)
    expect(posts).toEqual([mockNewerPost, mockOlderPost])
})

test("creates no posts", () => {
    const posts = createPosts({})
    expect(posts).toEqual([])
})

test("rejects invalid frontmatter", () => {
    const mockPostFile = generatePostFile({
        date: "invalid-date",
        slug: "invalid-post",
    })

    const invalidFiles = {
        "/content/posts/invalid-post.md": mockPostFile,
    }

    expect(() => createPosts(invalidFiles)).toThrow(
        "Invalid frontmatter in /content/posts/invalid-post.md:\n✖ Invalid ISO date\n  → at date",
    )
})

test("rejects missing filename", () => {
    const mockPostFile = generatePostFile()

    const invalidFiles = {
        "/": mockPostFile,
    }

    expect(() => createPosts(invalidFiles)).toThrow(
        "Could not determine filename from /.",
    )
})

test("rejects non-markdown filename", () => {
    const mockPostFile = generatePostFile()

    const invalidFiles = {
        "/content/posts/invalid-post.txt": mockPostFile,
    }

    expect(() => createPosts(invalidFiles)).toThrow(
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

    expect(() => createPosts(invalidFiles)).toThrow(
        'Invalid slug in /content/posts/expected-slug.md: expected "expected-slug", received "received-slug".',
    )
})

test("rejects duplicate slug", () => {
    const mockPostFile = generatePostFile({slug: "duplicate-post"})

    const invalidFiles = {
        "/content/posts/first/duplicate-post.md": mockPostFile,
        "/content/posts/second/duplicate-post.md": mockPostFile,
    }

    expect(() => createPosts(invalidFiles)).toThrow(
        'Duplicate post slug "duplicate-post" in /content/posts/first/duplicate-post.md and /content/posts/second/duplicate-post.md.',
    )
})
