import {AppContext} from "../../context/App"
import MobileNavigation from "./MobileNavigation"
import userEvent from "@testing-library/user-event"
import {render, screen} from "../../test-utils/render"

const mockAppCtxOpen = {
    open: true,
    setOpen: jest.fn(),
}

const mockAppCtxClosed = {
    open: false,
    setOpen: jest.fn(),
}

const links = ["blog", "now", "uses", "hire me", "contact"]

test("shows hamburger", () => {
    render(
        <AppContext.Provider value={mockAppCtxClosed}>
            <MobileNavigation />
        </AppContext.Provider>,
    )

    expect(screen.getByLabelText("menu"))
})

test("shows menu", () => {
    render(
        <AppContext.Provider value={mockAppCtxOpen}>
            <MobileNavigation />
        </AppContext.Provider>,
    )

    expect(screen.getByLabelText("close"))
    links.forEach(link => expect(screen.getByText(link)))
})

test("opens navigation", () => {
    render(
        <AppContext.Provider value={mockAppCtxClosed}>
            <MobileNavigation />
        </AppContext.Provider>,
    )

    userEvent.click(screen.getByLabelText("menu"))
    expect(mockAppCtxClosed.setOpen).toHaveBeenCalledTimes(1)
    expect(mockAppCtxClosed.setOpen).toHaveBeenCalledWith(true)
})

test("closes navigation", () => {
    render(
        <AppContext.Provider value={mockAppCtxOpen}>
            <MobileNavigation />
        </AppContext.Provider>,
    )

    userEvent.click(screen.getByLabelText("close"))
    expect(mockAppCtxOpen.setOpen).toHaveBeenCalledTimes(1)
    expect(mockAppCtxOpen.setOpen).toHaveBeenCalledWith(false)
})
