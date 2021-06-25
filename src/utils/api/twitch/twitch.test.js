import {mockChannelStatus} from "test-utils/mocks"
import {getChannelStatus} from "utils/api/twitch"

fetch.mockResponseOnce(JSON.stringify(mockChannelStatus))

test("gets channel status", async () => {
    const isLive = await getChannelStatus()
    expect(isLive).toEqual(true)
})
