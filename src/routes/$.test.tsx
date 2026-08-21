import {render, screen} from "@testing-library/react"
import {expect, test, vi} from "vitest"

import * as layout from "~/components/Layout"
import NotFoundRoute, {loader} from "~/routes/$"
import {mockPostFrontmatter, mockVideos} from "~/test-utils/mocks"
import {mockUseLoaderData} from "~/test-utils/mocks/remix"
import * as posts from "~/utils/posts"
import * as videos from "~/utils/videos"

const getLatestPostSpy = vi.spyOn(posts, "getLatestPost")
const getLatestVideosSpy = vi.spyOn(videos, "getLatestVideos")
const layoutSpy = vi.spyOn(layout, "default")

layoutSpy.mockImplementation(({children}) => <>{children}</>)

test("returns not found response", async () => {
    getLatestPostSpy.mockReturnValue(mockPostFrontmatter)
    getLatestVideosSpy.mockResolvedValue(mockVideos)

    const response = await loader()

    expect(response.init?.status).toEqual(404)

    expect(response.data).toEqual({
        latestPost: mockPostFrontmatter,
        latestVideos: mockVideos,
    })
})

test("renders not found page", () => {
    mockUseLoaderData.mockReturnValue({
        latestPost: mockPostFrontmatter,
        latestVideos: mockVideos,
    })

    render(<NotFoundRoute />)

    expect(screen.getByText("There's nothing here.")).toBeInTheDocument()
    expect(screen.getByText(mockPostFrontmatter.title)).toBeInTheDocument()

    mockVideos.forEach(video => {
        expect(screen.getByAltText(video.title)).toBeInTheDocument()
    })
})
