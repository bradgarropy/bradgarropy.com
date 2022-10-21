import {http} from "@bradgarropy/http"
import {mockChannelStatus} from "test-utils/mocks"
import {getChannelStatus} from "utils/api/twitch"
import {expect, Mock, test, vi} from "vitest"

vi.mock("@bradgarropy/http")

const mockGet = http.get as Mock
mockGet.mockReturnValue(mockChannelStatus)

test("gets channel status", async () => {
    const isLive = await getChannelStatus()
    expect(isLive).toEqual(true)
})
