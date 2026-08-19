import {expect, test} from "vitest"
import {z} from "zod"

import {parseFrontmatter} from "~/utils/frontmatter"

const schema = z.strictObject({
    title: z.string(),
})

test("parses valid frontmatter", () => {
    const frontmatter = parseFrontmatter("/content/example.md", schema, {
        title: "Example",
    })

    expect(frontmatter).toEqual({title: "Example"})
})

test("throws a descriptive error for invalid frontmatter", () => {
    expect(() => {
        parseFrontmatter("/content/example.md", schema, {title: 42})
    }).toThrow(
        "Invalid frontmatter in /content/example.md:\n✖ Invalid input: expected string, received number\n  → at title",
    )
})
