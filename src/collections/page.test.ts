import {expect, test} from "vitest"

import {createPages} from "~/collections/page"
import {generatePageFile} from "~/test-utils/generators"

const mockFiles = {
    "/content/pages/uses.md": {
        markdown: "Uses page.",
        attributes: {},
    },
    "/content/pages/resume.md": {
        markdown: "Resume page.",
        attributes: {},
    },
}

const mockResumePage = {
    path: "/content/pages/resume.md",
    slug: "resume",
    markdown: "Resume page.",
}

const mockUsesPage = {
    path: "/content/pages/uses.md",
    slug: "uses",
    markdown: "Uses page.",
}

test("creates pages", () => {
    const pages = createPages(mockFiles)
    expect(pages).toEqual([mockResumePage, mockUsesPage])
})

test("creates no pages", () => {
    const pages = createPages({})
    expect(pages).toEqual([])
})

test("rejects missing filename", () => {
    const mockPageFile = generatePageFile()

    const invalidFiles = {
        "/": mockPageFile,
    }

    expect(() => createPages(invalidFiles)).toThrow(
        "Could not determine filename from /.",
    )
})

test("rejects non-markdown filename", () => {
    const mockPageFile = generatePageFile()

    const invalidFiles = {
        "/content/pages/invalid-page.txt": mockPageFile,
    }

    expect(() => createPages(invalidFiles)).toThrow(
        "Page filename must end in .md: /content/pages/invalid-page.txt.",
    )
})

test("rejects duplicate slug", () => {
    const mockPageFile = generatePageFile()

    const invalidFiles = {
        "/content/pages/first/duplicate-page.md": mockPageFile,
        "/content/pages/second/duplicate-page.md": mockPageFile,
    }

    expect(() => createPages(invalidFiles)).toThrow(
        'Duplicate page slug "duplicate-page" in /content/pages/first/duplicate-page.md and /content/pages/second/duplicate-page.md.',
    )
})
