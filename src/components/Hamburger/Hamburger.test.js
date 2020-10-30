import Hamburger from "./Hamburger"
import {AppContext} from "context/App"
import {render, screen} from "test-utils/render"
import userEvent from "@testing-library/user-event"

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
