import {expect, test} from "vitest"

import {createNows} from "~/collections/now"
import {generateNowFile} from "~/test-utils/generators"

const mockFiles = {
    "/content/now/2025-01-01.md": {
        markdown: "Older now.",
        attributes: {
            date: "2025-01-01",
        },
    },
    "/content/now/2026-01-01.md": {
        markdown: "Newer now.",
        attributes: {
            date: "2026-01-01",
        },
    },
}

const mockOlderFile = mockFiles["/content/now/2025-01-01.md"]
const mockNewerFile = mockFiles["/content/now/2026-01-01.md"]

const mockOlderNow = {
    path: "/content/now/2025-01-01.md",
    markdown: mockOlderFile.markdown,
    frontmatter: mockOlderFile.attributes,
}

const mockNewerNow = {
    path: "/content/now/2026-01-01.md",
    markdown: mockNewerFile.markdown,
    frontmatter: mockNewerFile.attributes,
}

test("creates nows", () => {
    const nows = createNows(mockFiles)
    expect(nows).toEqual([mockOlderNow, mockNewerNow])
})

test("creates no nows", () => {
    const nows = createNows({})
    expect(nows).toEqual([])
})

test("rejects invalid frontmatter", () => {
    const mockNowFile = generateNowFile({date: "invalid-date"})

    const invalidFiles = {
        "/content/now/invalid-date.md": mockNowFile,
    }

    expect(() => createNows(invalidFiles)).toThrow(
        "Invalid frontmatter in /content/now/invalid-date.md:\n✖ Invalid ISO date\n  → at date",
    )
})

test("rejects missing filename", () => {
    const mockNowFile = generateNowFile()

    const invalidFiles = {
        "/": mockNowFile,
    }

    expect(() => createNows(invalidFiles)).toThrow(
        "Could not determine filename from /.",
    )
})

test("rejects non-markdown filename", () => {
    const mockNowFile = generateNowFile()

    const invalidFiles = {
        "/content/now/2020-12-31.txt": mockNowFile,
    }

    expect(() => createNows(invalidFiles)).toThrow(
        "Now filename must end in .md: /content/now/2020-12-31.txt.",
    )
})

test("rejects mismatched date", () => {
    const mockNowFile = generateNowFile({date: "2020-12-31"})

    const invalidFiles = {
        "/content/now/2021-01-01.md": mockNowFile,
    }

    expect(() => createNows(invalidFiles)).toThrow(
        'Invalid date in /content/now/2021-01-01.md: expected "2021-01-01", received "2020-12-31".',
    )
})

test("rejects duplicate date", () => {
    const mockNowFile = generateNowFile({date: "2020-12-31"})

    const invalidFiles = {
        "/content/now/first/2020-12-31.md": mockNowFile,
        "/content/now/second/2020-12-31.md": mockNowFile,
    }

    expect(() => createNows(invalidFiles)).toThrow(
        'Duplicate now date "2020-12-31" in /content/now/first/2020-12-31.md and /content/now/second/2020-12-31.md.',
    )
})
