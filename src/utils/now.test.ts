import {readdirSync} from "node:fs"

import {assert, expect, test, vi} from "vitest"

import {nows} from "~/collections/now"
import {
    getAllNows,
    getLatestNow,
    getNewerNow,
    getNowByDate,
    getOlderNow,
} from "~/utils/now"

const mockNows = vi.spyOn(nows, "at")

test("gets all nows", () => {
    const nows = getAllNows()

    const files = readdirSync("content/now")
    expect(nows).toHaveLength(files.length)
    expect(nows).toContain("2020-09-25")
})

test("gets now by date", async () => {
    const now = await getNowByDate("2020-09-25")

    expect(now).toMatchObject({
        html: expect.any(String),
        frontmatter: {
            date: "2020-09-25",
        },
    })
})

test("returns null when now does not exist", async () => {
    const now = await getNowByDate("invalid-date")
    expect(now).toBeNull()
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

test("throws when latest now does not exist", async () => {
    mockNows.mockReturnValueOnce(undefined)

    await expect(getLatestNow()).rejects.toThrow("Could not find latest now.")
})

test("gets newer now", async () => {
    const nows = getAllNows()
    const now = await getNowByDate(nows[0])
    assert(now)

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
    assert(earliestNow)

    const emptyNow = await getOlderNow(earliestNow)
    expect(emptyNow).toBeNull()
})
