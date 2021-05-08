import {getChannelStatus} from "api/twitch"
import {mockChannelStatus} from "test-utils/mocks"

fetch.mockResponseOnce(JSON.stringify(mockChannelStatus))

test("gets channel status", async () => {
    const isLive = await getChannelStatus()
    expect(isLive).toEqual(true)
})
