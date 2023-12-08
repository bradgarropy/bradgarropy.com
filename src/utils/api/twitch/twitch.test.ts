import {http} from "@bradgarropy/http"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import {mockChannelStatus} from "~/test-utils/mocks"
import {getChannelStatus} from "~/utils/api/twitch"

vi.mock("@bradgarropy/http")

const mockGet = http.get as Mock
mockGet.mockReturnValue(mockChannelStatus)

test("gets channel status", async () => {
    const isLive = await getChannelStatus()
    expect(isLive).toEqual(true)
})
