import {http} from "@bradgarropy/http"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import {
    mockVideos,
    mockYoutubeErrorResponse,
    mockYoutubeResponse,
} from "~/test-utils/mocks"
import {getLatestVideo, getLatestVideos} from "~/utils/videos"

vi.mock("@bradgarropy/http")

const mockGet = http.get as Mock

test("gets latest video", async () => {
    mockGet.mockResolvedValue(mockYoutubeResponse)

    const latestVideo = await getLatestVideo()
    expect(latestVideo).toEqual(mockVideos[0])
})

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
