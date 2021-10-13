import {get} from "@bradgarropy/http"
import {mockChannelStatus} from "test-utils/mocks"
import {getChannelStatus} from "utils/api/twitch"

jest.mock("@bradgarropy/http")

const mockGet = get as jest.Mock
mockGet.mockReturnValue(mockChannelStatus)

test("gets channel status", async () => {
    const isLive = await getChannelStatus()
    expect(isLive).toEqual(true)
})
