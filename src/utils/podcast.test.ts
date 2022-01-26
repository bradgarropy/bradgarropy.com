import {mockCaptivateResponse, mockPodcast} from "test-utils/mocks"
import {getPodcast} from "utils/podcast"

jest.mock("@bradgarropy/captivate-sdk", () => {
    return jest.fn().mockImplementation(() => {
        return {
            shows: {
                getShow: () => mockCaptivateResponse,
            },
        }
    })
})

test("gets podcast", async () => {
    const podcast = await getPodcast()
    expect(podcast).toEqual(mockPodcast)
})
