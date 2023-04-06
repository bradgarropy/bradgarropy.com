import type {Page} from "~/content"
import {getMarkdownBySlug} from "~/utils/markdown"

jest.mock("~/content", () => {
    const mockAllPages: Page[] = [
        {
            _id: "123",
            body: {
                html: "<p>This is the uses page.</p>",
                raw: "This is the uses page.",
            },
            _raw: {
                sourceFilePath: "",
                sourceFileName: "uses.md",
                sourceFileDir: "",
                contentType: "markdown",
                flattenedPath: "",
            },
            type: "Page",
            url: "",
        },
    ]

    return {
        allPages: mockAllPages,
    }
})

test("gets markdown by slug", async () => {
    const markdown = await getMarkdownBySlug("uses")

    expect(markdown).toEqual({
        frontmatter: {},
        html: "<p>This is the uses page.</p>",
    })
})
