import {http} from "@bradgarropy/http"

import {
    mockVideos,
    mockYoutubeErrorResponse,
    mockYoutubeResponse,
} from "~/test-utils/mocks"
import {getLatestVideos} from "~/utils/videos"

jest.mock("@bradgarropy/http")

const mockGet = http.get as jest.Mock

test("gets latest videos", async () => {
    mockGet.mockResolvedValue(mockYoutubeResponse)

    const latestVideos = await getLatestVideos()
    expect(latestVideos).toEqual(mockVideos)
})

test("handles youtube error", async () => {
    mockGet.mockResolvedValue(mockYoutubeErrorResponse)

    const latestVideos = await getLatestVideos()
    expect(latestVideos).toEqual([])
})
