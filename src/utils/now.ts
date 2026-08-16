import {nowFrontmatterSchema} from "~/schemas/now"
import type {NewerNow, Now, NowFrontmatter, OlderNow} from "~/types/now"
import {nowFiles} from "~/utils/files.server"
import {transformMarkdown} from "~/utils/markdown.server"

const getAllNows = (): NowFrontmatter["date"][] => {
    const nows = Object.values(nowFiles).map(file => {
        const frontmatter = nowFrontmatterSchema.parse(file.attributes)
        return frontmatter.date
    })

    return nows
}

const getNowByDate = async (slug: NowFrontmatter["date"]): Promise<Now> => {
    const file = nowFiles[`/content/now/${slug}.md`]
    const html = await transformMarkdown(file.markdown)
    const frontmatter = nowFrontmatterSchema.parse(file.attributes)

    const now: Now = {
        html,
        frontmatter,
    }

    return now
}

const getLatestNow = async (): Promise<Now> => {
    const nows = getAllNows()
    const date = nows[nows.length - 1]
    const latestNow = await getNowByDate(date)

    return latestNow
}

const getNewerNow = async (currentNow: Now): Promise<NewerNow> => {
    const nows = getAllNows()

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
    const nows = getAllNows()

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
