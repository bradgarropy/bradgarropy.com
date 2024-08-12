import {readdirSync} from "node:fs"

import {expect, test} from "vitest"

import {
    getAllNows,
    getLatestNow,
    getNewerNow,
    getNowByDate,
    getOlderNow,
} from "~/utils/now"

test("gets all nows", () => {
    const nows = getAllNows()

    const files = readdirSync("content/now")
    expect(nows).toHaveLength(files.length)
    expect(nows).toContain("2020-09-25")
})

test("gets now by slug", async () => {
    const now = await getNowByDate("2020-09-25")

    expect(now).toMatchObject({
        html: expect.any(String),
        frontmatter: {
            date: "2020-09-25",
        },
    })
})

test("gets latest now", async () => {
    const now = await getLatestNow()

    expect(now).toMatchObject({
        html: expect.any(String),
        frontmatter: {
            date: expect.any(String),
        },
    })
})

test("gets newer now", async () => {
    const nows = getAllNows()
    const now = await getNowByDate(nows[0])
    const newerNow = await getNewerNow(now)

    expect(newerNow).not.toBeNull()
    expect(newerNow?.frontmatter.date).toEqual(nows[1])

    // when there is no newer now
    const latestNow = await getLatestNow()
    const emptyNow = await getNewerNow(latestNow)

    expect(emptyNow).toBeNull()
})

test("gets older now", async () => {
    const nows = getAllNows()
    const latestNow = await getLatestNow()
    const olderNow = await getOlderNow(latestNow)

    expect(olderNow).not.toBeNull()
    expect(olderNow?.frontmatter.date).toEqual(nows[nows.length - 2])

    // when there is no older now
    const earliestNow = await getNowByDate(nows[0])
    const emptyNow = await getOlderNow(earliestNow)
    expect(emptyNow).toBeNull()
})
