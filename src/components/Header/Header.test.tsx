import {render, screen} from "@testing-library/react"
import {useApp, useLive} from "hooks"
import {generateAppCtx} from "test-utils/generators"

import Header from "./Header"

jest.mock("hooks")

const mockAppCtx = generateAppCtx()

const mockUseLive = useLive as jest.Mock

const mockUseApp = useApp as jest.Mock
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
