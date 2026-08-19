import {nowFrontmatterSchema} from "~/schemas/now"
import type {Markdown} from "~/types/markdown"
import type {Now, NowFrontmatter} from "~/types/now"
import {nowFiles} from "~/utils/files.server"

const validateNowDate = (now: Now): void => {
    const {path, frontmatter} = now
    const filename = path.split("/").at(-1)

    if (!filename) {
        throw new Error(`Could not determine filename from ${path}.`)
    }

    if (!filename.endsWith(".md")) {
        throw new Error(`Now filename must end in .md: ${path}.`)
    }

    const expectedDate = filename.slice(0, -3)

    if (frontmatter.date !== expectedDate) {
        throw new Error(
            `Invalid date in ${path}: expected "${expectedDate}", received "${frontmatter.date}".`,
        )
    }
}

const createNows = (files: Record<string, Markdown<unknown>>): Now[] => {
    const nows = Object.entries(files).map(([path, file]) => {
        const {attributes, markdown} = file
        const frontmatter = nowFrontmatterSchema.parse(attributes)

        const now: Now = {
            path,
            markdown,
            frontmatter,
        }

        validateNowDate(now)
        return now
    })

    const nowsByDate = new Map<NowFrontmatter["date"], Now>()

    nows.forEach(now => {
        const date = now.frontmatter.date
        const existingNow = nowsByDate.get(date)

        if (existingNow) {
            throw new Error(
                `Duplicate now date "${date}" in ${existingNow.path} and ${now.path}.`,
            )
        }

        nowsByDate.set(date, now)
    })

    nows.sort((a, b) => {
        return a.frontmatter.date.localeCompare(b.frontmatter.date)
    })

    return nows
}

const nows = createNows(nowFiles)

export {createNows, nows}
