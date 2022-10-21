import {render, screen} from "@testing-library/react"
import {useApp, useLive} from "hooks"
import {generateAppCtx} from "test-utils/generators"
import {describe, expect, Mock, test, vi} from "vitest"

import Header from "./Header"

vi.mock("hooks")

const mockAppCtx = generateAppCtx()

const mockUseLive = useLive as Mock

const mockUseApp = useApp as Mock
mockUseApp.mockReturnValue(mockAppCtx)

describe("streaming", () => {
    mockUseLive.mockReturnValue(true)

    test("shows logo", () => {
        render(<Header />)
        expect(screen.getByLabelText("bg"))
    })

    test("shows streaming", () => {
        render(<Header />)
        expect(screen.getByText("🎥 streaming"))
    })
})

describe("not streaming", () => {
    test("does not show streaming", () => {
        mockUseLive.mockReturnValue(false)

        render(<Header />)
        expect(screen.queryByText("🎥 streaming")).toBeNull()
    })
})
