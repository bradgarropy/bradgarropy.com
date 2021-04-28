import {render, screen} from "@testing-library/react"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"

import Header from "./Header"

const mockAppCtx = generateAppCtx()

jest.mock("hooks")
useApp.mockReturnValue(mockAppCtx)

test("shows logo", () => {
    render(<Header />)
    expect(screen.getByLabelText("bg"))
})
