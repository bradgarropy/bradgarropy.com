import {render, screen} from "@testing-library/react"
import {useApp, useLive} from "hooks"
import {generateAppCtx} from "test-utils/generators"

import Header from "./Header"

jest.mock("hooks")

const mockAppCtx = generateAppCtx()
useApp.mockReturnValue(mockAppCtx)

describe("streaming", () => {
    useLive.mockReturnValue(true)

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
        useLive.mockReturnValue(false)

        render(<Header />)
        expect(screen.queryByText("🎥 streaming")).toBeNull()
    })
})
