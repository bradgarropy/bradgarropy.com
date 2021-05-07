import {render, screen} from "@testing-library/react"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"

import Header from "./Header"

const mockAppCtxOnline = generateAppCtx({live: true})
const mockAppCtxOffline = generateAppCtx({live: false})

jest.mock("hooks")

describe("streaming", () => {
    useApp.mockReturnValue(mockAppCtxOnline)

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
        useApp.mockReturnValue(mockAppCtxOffline)

        render(<Header />)
        expect(screen.queryByText("🎥 streaming")).toBeNull()
    })
})
