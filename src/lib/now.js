import {parse} from "date-fns"
import fs from "fs"
import path from "path"
import {parseMarkdown} from "utils/markdown"

const getNow = async slug => {
    const nowPath = path.join(process.cwd(), `content/now/${slug}.md`)
    const file = fs.readFileSync(nowPath, "utf8")
    const rawNow = await parseMarkdown(file)

    const now = {
        ...rawNow,
        frontmatter: {
            ...rawNow.frontmatter,
            slug,
        },
    }

    return now
}

const getNows = async () => {
    const nowPath = path.join(process.cwd(), "content/now")
    const files = fs.readdirSync(nowPath)
    const slugs = files.map(file => path.parse(file).name)
    const nows = await Promise.all(slugs.map(slug => getNow(slug)))

    nows.sort((a, b) => {
        const aDate = parse(a.frontmatter.slug, "yyyy-MM-dd", new Date())
        const bDate = parse(b.frontmatter.slug, "yyyy-MM-dd", new Date())
        return bDate - aDate
    })

    return nows
}

const getOlderNow = async slug => {
    const nows = await getNows()
    const index = nows.findIndex(now => now.frontmatter.slug === slug)
    const older = nows[index + 1] || null

    return older
}

const getNewerNow = async slug => {
    const nows = await getNows()
    const index = nows.findIndex(now => now.frontmatter.slug === slug)
    const newer = nows[index - 1] || null

    return newer
}

export {getNewerNow, getNow, getNows, getOlderNow}
