import {expect, test} from "vitest"

import {postFrontmatterSchema} from "~/schemas/post"

test("validates frontmatter", () => {
    const frontmatter = {
        date: "2026-07-22",
        slug: "trmnl-x",
        tags: ["trmnl"],
        title: "📄 trmnl x",
        topic: "coding",
    }

    const {success} = postFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(true)
})

test("rejects invalid date", () => {
    const frontmatter = {
        date: "2026-02-29",
        slug: "trmnl-x",
        tags: ["trmnl"],
        title: "📄 trmnl x",
        topic: "coding",
    }

    const {success} = postFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(false)
})

test("rejects invalid slug", () => {
    const frontmatter = {
        date: "2026-07-22",
        slug: "TRMNL X",
        tags: ["trmnl"],
        title: "📄 trmnl x",
        topic: "coding",
    }

    const {success} = postFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(false)
})

test("rejects invalid tag", () => {
    const frontmatter = {
        date: "2026-07-22",
        slug: "trmnl-x",
        tags: ["TRMNL X"],
        title: "📄 trmnl x",
        topic: "coding",
    }

    const {success} = postFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(false)
})

test("rejects duplicate tags", () => {
    const frontmatter = {
        date: "2026-07-22",
        slug: "trmnl-x",
        tags: ["trmnl", "trmnl"],
        title: "📄 trmnl x",
        topic: "coding",
    }

    const {success} = postFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(false)
})

test("rejects invalid title", () => {
    const frontmatter = {
        date: "2026-07-22",
        slug: "trmnl-x",
        tags: ["trmnl"],
        title: "",
        topic: "coding",
    }

    const {success} = postFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(false)
})

test("rejects invalid topic", () => {
    const frontmatter = {
        date: "2026-07-22",
        slug: "trmnl-x",
        tags: ["trmnl"],
        title: "📄 trmnl x",
        topic: "invalid-topic",
    }

    const {success} = postFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(false)
})
