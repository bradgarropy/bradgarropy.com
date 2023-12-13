import {act, renderHook, waitFor} from "@testing-library/react"
import {expect, test, vi} from "vitest"

import useLive from "~/hooks/useLive"
import * as twitch from "~/utils/api/twitch"

vi.useFakeTimers()

test("returns online status", async () => {
    const getChannelStatusSpy = vi.spyOn(twitch, "getChannelStatus")
    getChannelStatusSpy.mockResolvedValue(true)

    const {result} = renderHook(() => useLive())

    act(() => {
        vi.advanceTimersByTimeAsync(60000)
    })

    await waitFor(() => {
        expect(result.current).toEqual(true)
    })
})

test("returns offline status", () => {
    const getChannelStatusSpy = vi.spyOn(twitch, "getChannelStatus")
    getChannelStatusSpy.mockResolvedValue(false)

    const {result} = renderHook(() => useLive())
    expect(result.current).toEqual(false)
})

test("polls for changes", async () => {
    const getChannelStatusSpy = vi.spyOn(twitch, "getChannelStatus")
    getChannelStatusSpy.mockResolvedValue(false)

    renderHook(() => useLive())

    vi.advanceTimersByTime(60000)
    expect(getChannelStatusSpy).toHaveBeenCalledTimes(2)
})

test("stops polling", () => {
    const clearIntervalSpy = vi.spyOn(global, "clearInterval")
    const getChannelStatusSpy = vi.spyOn(twitch, "getChannelStatus")
    getChannelStatusSpy.mockResolvedValue(false)

    const {unmount} = renderHook(() => useLive())

    unmount()
    expect(clearIntervalSpy).toHaveBeenCalledTimes(1)
})
