import {renderHook} from "@testing-library/react-hooks"
import {useLive} from "hooks"
import {getChannelStatus} from "utils/api/twitch"

jest.mock("utils/api/twitch")
jest.useFakeTimers("legacy")

const mockGetChannelStatus = getChannelStatus as jest.Mock

test("returns online status", async () => {
    mockGetChannelStatus.mockReturnValue(true)

    const {result, waitForNextUpdate} = renderHook(() => useLive())
    await waitForNextUpdate()

    expect(result.current).toEqual(true)
})

test("returns offline status", () => {
    mockGetChannelStatus.mockReturnValue(false)

    const {result} = renderHook(() => useLive())
    expect(result.current).toEqual(false)
})

test("polls for changes", async () => {
    mockGetChannelStatus.mockReturnValue(false)

    renderHook(() => useLive())

    jest.advanceTimersByTime(60000)
    expect(mockGetChannelStatus).toHaveBeenCalledTimes(2)
})

test("stops polling", () => {
    mockGetChannelStatus.mockReturnValue(false)

    const {unmount} = renderHook(() => useLive())

    unmount()
    expect(clearInterval).toHaveBeenCalledTimes(1)
})
