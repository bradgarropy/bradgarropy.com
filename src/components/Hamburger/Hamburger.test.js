import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"

import Hamburger from "./Hamburger"

const mockAppCtx = generateAppCtx()

jest.mock("hooks")
useApp.mockReturnValue(mockAppCtx)

test("opens mobile menu", () => {
    render(<Hamburger />)

    userEvent.click(screen.getByLabelText("menu"))
    expect(mockAppCtx.setOpen).toHaveBeenCalledTimes(1)
})
