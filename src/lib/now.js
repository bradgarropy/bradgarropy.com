import {parse} from "date-fns"
import fs from "fs"
import path from "path"
import {parseMarkdown} from "utils/markdown"

const getNow = async slug => {
    const nowPath = path.join(process.cwd(), `content/now/${slug}.md`)
    const file = fs.readFileSync(nowPath, "utf8")
    const now = parseMarkdown(file)

    return now
}

const getNows = async () => {
    const nowPath = path.join(process.cwd(), "content/now")

    const nows = await Promise.all(
        fs
            .readdirSync(nowPath)
            .map(file => file.replace(".md", ""))
            .map(slug => getNow(slug)),
    )

    nows.sort((a, b) => {
        const aDate = parse(a.frontmatter.date, "yyyy-MM-dd", new Date())
        const bDate = parse(b.frontmatter.date, "yyyy-MM-dd", new Date())
        return bDate - aDate
    })

    return nows
}

const getOlderNow = async slug => {
    const nows = await getNows()
    const index = nows.findIndex(now => now.frontmatter.date === slug)
    const older = nows[index + 1] || null

    return older
}

const getNewerNow = async slug => {
    const nows = await getNows()
    const index = nows.findIndex(now => now.frontmatter.date === slug)
    const newer = nows[index - 1] || null

    return newer
}

export {getNewerNow, getNow, getNows, getOlderNow}
