import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {AppContext} from "context/App"

import Hamburger from "./Hamburger"

const mockAppCtx = {
    open: false,
    setOpen: jest.fn(),
}

test("opens mobile menu", () => {
    render(
        <AppContext.Provider value={mockAppCtx}>
            <Hamburger />
        </AppContext.Provider>,
    )

    userEvent.click(screen.getByLabelText("menu"))
    expect(mockAppCtx.setOpen).toHaveBeenCalledTimes(1)
})
