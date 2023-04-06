import {allPages} from "~/content"
import type {Markdown} from "~/types/markdown"

const getMarkdownBySlug = async (slug: string): Promise<Markdown> => {
    const page = allPages.find(
        page => page._raw.sourceFileName === `${slug}.md`,
    )

    const markdown: Markdown = {
        html: page.body.html,
        frontmatter: {},
    }

    return markdown
}

export {getMarkdownBySlug}
