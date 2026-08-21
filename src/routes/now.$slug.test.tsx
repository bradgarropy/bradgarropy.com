import type {LoaderFunctionArgs} from "@remix-run/node"
import {render, screen} from "@testing-library/react"
import {expect, test, vi} from "vitest"

import * as layout from "~/components/Layout"
import NowRoute, {loader} from "~/routes/now.$slug"
import {mockNewerNow, mockNow, mockOlderNow} from "~/test-utils/mocks"
import {mockUseLoaderData} from "~/test-utils/mocks/remix"
import * as nows from "~/utils/now"

const getNowByDateSpy = vi.spyOn(nows, "getNowByDate")
const getNewerNowSpy = vi.spyOn(nows, "getNewerNow")
const getOlderNowSpy = vi.spyOn(nows, "getOlderNow")
const layoutSpy = vi.spyOn(layout, "default")

layoutSpy.mockImplementation(({children}) => <>{children}</>)

const args: LoaderFunctionArgs = {
    context: {},
    params: {slug: mockNow.frontmatter.date},
    request: new Request(
        `https://bradgarropy.com/now/${mockNow.frontmatter.date}`,
    ),
}

test("returns now", async () => {
    getNowByDateSpy.mockResolvedValueOnce(mockNow)
    getNewerNowSpy.mockResolvedValueOnce(mockNewerNow)
    getOlderNowSpy.mockResolvedValueOnce(mockOlderNow)

    const response = await loader(args)

    expect(response).toEqual({
        currentNow: mockNow,
        newerNow: mockNewerNow,
        olderNow: mockOlderNow,
    })
})

test("returns not found when now does not exist", async () => {
    getNowByDateSpy.mockResolvedValueOnce(null)

    await expect(loader(args)).rejects.toMatchObject({status: 404})
    expect(getNewerNowSpy).not.toHaveBeenCalled()
    expect(getOlderNowSpy).not.toHaveBeenCalled()
})

test("shows now", () => {
    mockUseLoaderData.mockReturnValue({
        currentNow: mockNow,
        newerNow: mockNewerNow,
        olderNow: mockOlderNow,
    })

    render(<NowRoute />)

    expect(document.title).toEqual("🧭 now")
    expect(screen.getByText("🧭 now")).toBeInTheDocument()
    expect(screen.getByText("👈🏼 newer")).toBeInTheDocument()
    expect(screen.getByText("older 👉🏼")).toBeInTheDocument()
})
