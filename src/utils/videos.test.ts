import {get} from "@bradgarropy/http"
import {mockVideos, mockYoutubeResponse} from "test-utils/mocks"
import {getLatestVideos} from "utils/videos"

jest.mock("@bradgarropy/http")

const mockGet = get as jest.Mock
mockGet.mockResolvedValue(mockYoutubeResponse)

test("gets latest videos", async () => {
    const latestVideos = await getLatestVideos()
    expect(latestVideos).toEqual(mockVideos)
})
