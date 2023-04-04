import fs from "fs"
import matter from "gray-matter"
import path from "path"

import type {NewerNow, Now, NowFrontmatter, OlderNow} from "~/types/now"
import {transformMarkdown} from "~/utils/markdown"

const getAllNows = (): NowFrontmatter["date"][] => {
    const nowsPath = path.join(process.cwd(), "content/now")
    const nows = fs.readdirSync(nowsPath).map(now => now.replace(".md", ""))

    return nows
}

const getNowByDate = async (slug: NowFrontmatter["date"]): Promise<Now> => {
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
    const date = nows[nows.length - 1].replace(".md", "")
    const latestNow = await getNowByDate(date)

    return latestNow
}

const getNewerNow = async (currentNow: Now): Promise<NewerNow> => {
    const nowsPath = path.join(process.cwd(), "content/now")
    const nows = fs.readdirSync(nowsPath).map(now => now.replace(".md", ""))

    const currentNowIndex = nows.findIndex(
        now => now === currentNow.frontmatter.date,
    )

    const date = nows[currentNowIndex + 1]

    if (!date) {
        return null
    }

    const newerNow = await getNowByDate(date)
    return newerNow
}

const getOlderNow = async (currentNow: Now): Promise<OlderNow> => {
    const nowsPath = path.join(process.cwd(), "content/now")
    const nows = fs.readdirSync(nowsPath).map(now => now.replace(".md", ""))

    const currentNowIndex = nows.findIndex(
        now => now === currentNow.frontmatter.date,
    )

    const date = nows[currentNowIndex - 1]

    if (!date) {
        return null
    }

    const olderNow = await getNowByDate(date)
    return olderNow
}

export {getAllNows, getLatestNow, getNewerNow, getNowByDate, getOlderNow}
