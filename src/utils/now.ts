import {nows} from "~/collections/now"
import type {
    NewerNow,
    Now,
    NowFrontmatter,
    OlderNow,
    RenderedNow,
} from "~/types/now"
import {transformMarkdown} from "~/utils/markdown.server"

const renderNow = async (now: Now): Promise<RenderedNow> => {
    const html = await transformMarkdown(now.markdown)

    const renderedNow: RenderedNow = {
        html,
        frontmatter: now.frontmatter,
    }

    return renderedNow
}

const getAllNows = (): NowFrontmatter["date"][] => {
    const dates = nows.map(now => {
        return now.frontmatter.date
    })

    return dates
}

const getNowByDate = async (
    date: NowFrontmatter["date"],
): Promise<RenderedNow | null> => {
    const now = nows.find(now => now.frontmatter.date === date)

    if (!now) {
        return null
    }

    return renderNow(now)
}

const getLatestNow = async (): Promise<RenderedNow> => {
    const latestNow = nows.at(-1)

    if (!latestNow) {
        throw new Error("Could not find latest now.")
    }

    return renderNow(latestNow)
}

const getNewerNow = async (currentNow: RenderedNow): Promise<NewerNow> => {
    const currentNowIndex = nows.findIndex(
        now => now.frontmatter.date === currentNow.frontmatter.date,
    )

    const newerNow = nows[currentNowIndex + 1]

    if (!newerNow) {
        return null
    }

    return renderNow(newerNow)
}

const getOlderNow = async (currentNow: RenderedNow): Promise<OlderNow> => {
    const currentNowIndex = nows.findIndex(
        now => now.frontmatter.date === currentNow.frontmatter.date,
    )

    const olderNow = nows[currentNowIndex - 1]

    if (!olderNow) {
        return null
    }

    return renderNow(olderNow)
}

export {getAllNows, getLatestNow, getNewerNow, getNowByDate, getOlderNow}
