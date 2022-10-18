import matchers from "@testing-library/jest-dom/matchers"
import {cleanup} from "@testing-library/react"
import {afterEach, expect, vi} from "vitest"

globalThis.IS_REACT_ACT_ENVIRONMENT = true

expect.extend(matchers)

afterEach(() => {
    cleanup()
    vi.clearAllMocks()
    vi.clearAllTimers()
})
