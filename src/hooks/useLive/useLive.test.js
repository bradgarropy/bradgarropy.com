import {renderHook} from "@testing-library/react-hooks"
import {useLive} from "hooks"
import {getChannelStatus} from "utils/api/twitch"

jest.mock("api/twitch")
jest.useFakeTimers()

test("returns online status", async () => {
    getChannelStatus.mockReturnValue(true)

    const {result, waitForNextUpdate} = renderHook(() => useLive())
    await waitForNextUpdate()

    expect(result.current).toEqual(true)
})

test("returns offline status", () => {
    getChannelStatus.mockReturnValue(false)

    const {result} = renderHook(() => useLive())
    expect(result.current).toEqual(false)
})

test("polls for changes", async () => {
    getChannelStatus.mockReturnValue(false)

    renderHook(() => useLive())

    jest.advanceTimersByTime(60000)
    expect(getChannelStatus).toHaveBeenCalledTimes(2)
})

test("stops polling", () => {
    getChannelStatus.mockReturnValue(false)

    const {unmount} = renderHook(() => useLive())

    unmount()
    expect(clearInterval).toHaveBeenCalledTimes(1)
})
