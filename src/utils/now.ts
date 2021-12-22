import fs from "fs"
import matter from "gray-matter"
import path from "path"
import {Now, NowFrontmatter} from "types/now"
import {transformMarkdown} from "utils/markdown"

const getNowBySlug = async (slug: NowFrontmatter["date"]): Promise<Now> => {
    const nowPath = path.join(process.cwd(), `content/now/${slug}.md`)

    const file = matter.read(nowPath)
    const html = await transformMarkdown(file.content)

    const now: Now = {
        html,
        frontmatter: file.data as NowFrontmatter,
    }

    return now
}

const getLatestNow = async (): Promise<Now> => {
    const nowsPath = path.join(process.cwd(), "content/now")

    const nows = fs.readdirSync(nowsPath)
    const slug = nows[nows.length - 1].replace(".md", "")
    const latestNow = await getNowBySlug(slug)

    return latestNow
}

const getNewerNow = (currentNow: Now): Now => {
    return null
}

const getOlderNow = (currentNow: Now): Now => {
    return null
}

export {getLatestNow, getNewerNow, getNowBySlug, getOlderNow}
