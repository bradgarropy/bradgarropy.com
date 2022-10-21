import {http} from "@bradgarropy/http"
import {mockVideos, mockYoutubeResponse} from "test-utils/mocks"
import {getLatestVideos} from "utils/videos"
import {expect, Mock, test, vi} from "vitest"

vi.mock("@bradgarropy/http")

const mockGet = http.get as Mock
mockGet.mockResolvedValue(mockYoutubeResponse)

test.concurrent("gets latest videos", async () => {
    const latestVideos = await getLatestVideos()
    expect(latestVideos).toEqual(mockVideos)
})
