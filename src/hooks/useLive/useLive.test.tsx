import {renderHook, waitFor} from "@testing-library/react"
import {useLive} from "hooks"
import {getChannelStatus} from "utils/api/twitch"
import {expect, test, vi} from "vitest"

vi.mock("utils/api/twitch")
vi.useFakeTimers()

const mockGetChannelStatus = vi.mocked(getChannelStatus)

test("returns online status", async () => {
    mockGetChannelStatus.mockResolvedValue(true)

    const {result} = renderHook(() => useLive())

    await waitFor(() => {
        expect(result.current).toEqual(true)
    })
})

test("returns offline status", () => {
    mockGetChannelStatus.mockResolvedValue(false)

    const {result} = renderHook(() => useLive())
    expect(result.current).toEqual(false)
})

test("polls for changes", async () => {
    mockGetChannelStatus.mockResolvedValue(false)

    renderHook(() => useLive())

    vi.advanceTimersByTime(60000)
    expect(mockGetChannelStatus).toHaveBeenCalledTimes(2)
})

test("stops polling", () => {
    mockGetChannelStatus.mockResolvedValue(false)

    const {unmount} = renderHook(() => useLive())

    unmount()
    expect(clearInterval).toHaveBeenCalledTimes(1)
})
