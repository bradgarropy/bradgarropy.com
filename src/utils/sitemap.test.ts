import {expect, test} from "vitest"

import {generateSitemap} from "~/utils/sitemap"

test("generates sitemap", async () => {
    const sitemap = await generateSitemap()

    expect(sitemap).toContain("/")
    expect(sitemap).toContain("/blog")
    expect(sitemap).toContain("/connect")
    expect(sitemap).toContain("/contact")
    expect(sitemap).toContain("/hire-me")
    expect(sitemap).toContain("/now")
    expect(sitemap).toContain("/resume")
    expect(sitemap).toContain("/sponsors")
    expect(sitemap).toContain("/uses")
    expect(sitemap).toContain("/blog/i-am-a-developer")
    expect(sitemap).toContain("/now/2020-09-25")
    expect(sitemap).toContain("/tag/thoughts")
    expect(sitemap).toContain("/topic/life")
})
