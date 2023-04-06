import {compareDesc, parseISO} from "date-fns"

import {allNows} from "~/content"
import type {NewerNow, Now, NowFrontmatter, OlderNow} from "~/types/now"

const getAllNows = (): NowFrontmatter["date"][] => {
    const nows = allNows.map(now => {
        return now.date
    })

    return nows
}

const getNowByDate = (date: NowFrontmatter["date"]): Now => {
    const currentNow = allNows.find(now => now.date === date)

    const now: Now = {
        html: currentNow.body.html,
        frontmatter: {
            date: currentNow.date,
        },
    }

    return now
}

const getLatestNow = (): Now => {
    const sortedNows = sortNowsByDate(allNows)
    const latestNow = getNowByDate(sortedNows[0].date)

    return latestNow
}

const getNewerNow = (currentNow: Now): NewerNow => {
    const sortedNows = sortNowsByDate(allNows)

    const currentNowIndex = sortedNows.findIndex(
        now => now.date === currentNow.frontmatter.date,
    )

    if (!sortedNows[currentNowIndex - 1]) {
        return null
    }

    const newerNow: Now = {
        html: sortedNows[currentNowIndex - 1].body.html,
        frontmatter: {
            date: sortedNows[currentNowIndex - 1].date,
        },
    }

    return newerNow
}

const getOlderNow = (currentNow: Now): OlderNow => {
    const sortedNows = sortNowsByDate(allNows)

    const currentNowIndex = sortedNows.findIndex(
        now => now.date === currentNow.frontmatter.date,
    )

    if (!sortedNows[currentNowIndex + 1]) {
        return null
    }

    const olderNow: Now = {
        html: sortedNows[currentNowIndex + 1].body.html,
        frontmatter: {
            date: sortedNows[currentNowIndex + 1].date,
        },
    }

    return olderNow
}

const sortNowsByDate = nows => {
    const sortedNows = [...nows]

    sortedNows.sort((a, b) => {
        const aDate = parseISO(a.date)
        const bDate = parseISO(b.date)
        return compareDesc(aDate, bDate)
    })

    return sortedNows
}

export {getAllNows, getLatestNow, getNewerNow, getNowByDate, getOlderNow}
