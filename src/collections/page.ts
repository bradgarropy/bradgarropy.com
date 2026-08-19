import type {Markdown} from "~/types/markdown"
import type {Page} from "~/types/page"
import {pageFiles} from "~/utils/files.server"

const createPages = (files: Record<string, Markdown<unknown>>): Page[] => {
    const pages = Object.entries(files).map(([path, file]) => {
        const filename = path.split("/").at(-1)

        if (!filename) {
            throw new Error(`Could not determine filename from ${path}.`)
        }

        if (!filename.endsWith(".md")) {
            throw new Error(`Page filename must end in .md: ${path}.`)
        }

        const page: Page = {
            path,
            slug: filename.slice(0, -3),
            markdown: file.markdown,
        }

        return page
    })

    const pagesBySlug = new Map<Page["slug"], Page>()

    pages.forEach(page => {
        const existingPage = pagesBySlug.get(page.slug)

        if (existingPage) {
            throw new Error(
                `Duplicate page slug "${page.slug}" in ${existingPage.path} and ${page.path}.`,
            )
        }

        pagesBySlug.set(page.slug, page)
    })

    pages.sort((a, b) => {
        return a.path.localeCompare(b.path)
    })

    return pages
}

const pages = createPages(pageFiles)

export {createPages, pages}
