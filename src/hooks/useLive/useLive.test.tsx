import {act, renderHook, waitFor} from "@testing-library/react"
import {useLive} from "hooks"
import * as twitch from "utils/api/twitch"
import {expect, test, vi} from "vitest"

vi.useFakeTimers()
vi.stubGlobal("clearInterval", vi.fn())

const mockGetChannelStatus = vi.spyOn(twitch, "getChannelStatus")

test.concurrent("returns online status", async () => {
    mockGetChannelStatus.mockResolvedValue(true)

    const {result} = renderHook(() => useLive())

    await act(() => {
        vi.advanceTimersToNextTimer()
    })

    await waitFor(() => {
        expect(result.current).toEqual(true)
    })
})

test.concurrent("returns offline status", () => {
    mockGetChannelStatus.mockResolvedValue(false)

    const {result} = renderHook(() => useLive())
    expect(result.current).toEqual(false)
})

test.concurrent("polls for changes", async () => {
    mockGetChannelStatus.mockResolvedValue(false)

    renderHook(() => useLive())

    vi.advanceTimersByTime(60000)
    expect(mockGetChannelStatus).toHaveBeenCalledTimes(2)
})

test.concurrent("stops polling", async () => {
    mockGetChannelStatus.mockResolvedValue(false)

    const {unmount} = renderHook(() => useLive())

    unmount()

    await waitFor(() => {
        expect(clearInterval).toHaveBeenCalledTimes(1)
    })
})
