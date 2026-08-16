import {expect, test} from "vitest"

import {nowFrontmatterSchema} from "~/schemas/now"

test("validates frontmatter", () => {
    const frontmatter = {
        date: "2025-01-14",
    }
    const {success} = nowFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(true)
})

test("rejects invalid date", () => {
    const frontmatter = {
        date: "2025-02-29",
    }

    const {success} = nowFrontmatterSchema.safeParse(frontmatter)
    expect(success).toEqual(false)
})
