import {renderHook} from "@testing-library/react-hooks"
import {useLive} from "hooks"
import {generateTwitchResponse} from "test-utils/generators"

const mockOnlineResponse = generateTwitchResponse({is_live: true})
const mockOfflineResponse = generateTwitchResponse({is_live: false})

test("returns online status", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockOnlineResponse))

    const {result, waitForNextUpdate} = renderHook(() => useLive())
    await waitForNextUpdate()

    expect(result.current).toEqual(true)
})

test("returns offline status", () => {
    fetch.mockResponseOnce(JSON.stringify(mockOfflineResponse))

    const {result} = renderHook(() => useLive())
    expect(result.current).toEqual(false)
})
