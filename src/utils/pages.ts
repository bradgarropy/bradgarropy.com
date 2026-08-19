import {pages} from "~/collections/page"
import type {Page, RenderedPage} from "~/types/page"
import {transformMarkdown} from "~/utils/markdown.server"

const getPageBySlug = async (
    slug: Page["slug"],
): Promise<RenderedPage | null> => {
    const page = pages.find(page => page.slug === slug)

    if (!page) {
        return null
    }

    const html = await transformMarkdown(page.markdown)
    return {html}
}

export {getPageBySlug}
