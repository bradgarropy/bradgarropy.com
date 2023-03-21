import fs from "fs"
import matter from "gray-matter"
import type {NewerNow, Now, NowFrontmatter, OlderNow} from "types/now"
import {transformMarkdown} from "utils/markdown"

const getAllNows = (): NowFrontmatter["date"][] => {
    const nowsPath = `${__dirname}/../content/now`
    const nows = fs.readdirSync(nowsPath).map(now => now.replace(".md", ""))

    return nows
}

const getNowByDate = async (date: NowFrontmatter["date"]): Promise<Now> => {
    const nowPath = `${__dirname}/../content/now/${date}.md`

    const file = matter.read(nowPath)
    const html = await transformMarkdown(file.content)

    const now: Now = {
        html,
        frontmatter: file.data as NowFrontmatter,
    }

    return now
}

const getLatestNow = async (): Promise<Now> => {
    const nowsPath = `${__dirname}/../content/now`

    const nows = fs.readdirSync(nowsPath)
    const slug = nows[nows.length - 1].replace(".md", "")
    const latestNow = await getNowByDate(slug)

    return latestNow
}

const getNewerNow = async (currentNow: Now): Promise<NewerNow> => {
    const nowsPath = `${__dirname}/../content/now`
    const nows = fs.readdirSync(nowsPath).map(now => now.replace(".md", ""))

    const currentNowIndex = nows.findIndex(
        now => now === currentNow.frontmatter.date,
    )

    const slug = nows[currentNowIndex + 1]

    if (!slug) {
        return null
    }

    const newerNow = await getNowByDate(slug)
    return newerNow
}

const getOlderNow = async (currentNow: Now): Promise<OlderNow> => {
    const nowsPath = `${__dirname}/../content/now`
    const nows = fs.readdirSync(nowsPath).map(now => now.replace(".md", ""))

    const currentNowIndex = nows.findIndex(
        now => now === currentNow.frontmatter.date,
    )

    const slug = nows[currentNowIndex - 1]

    if (!slug) {
        return null
    }

    const olderNow = await getNowByDate(slug)
    return olderNow
}

export {getAllNows, getLatestNow, getNewerNow, getNowByDate, getOlderNow}
