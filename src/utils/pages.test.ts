import {expect, test, vi} from "vitest"

import * as markdown from "~/utils/markdown.server"
import {getPageBySlug} from "~/utils/pages"

const mockMarkdown = vi.spyOn(markdown, "renderMarkdown")

test("gets page", async () => {
    mockMarkdown.mockResolvedValueOnce("Uses page.")

    const page = await getPageBySlug("uses")

    expect(page).toEqual({
        html: "Uses page.",
    })
})

test("returns null when page does not exist", async () => {
    const page = await getPageBySlug("invalid-page")
    expect(page).toBeNull()
})
