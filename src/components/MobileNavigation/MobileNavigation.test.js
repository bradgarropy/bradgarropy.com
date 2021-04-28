import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"

import MobileNavigation from "./MobileNavigation"

const mockAppCtxOpen = generateAppCtx({open: true})
const mockAppCtxClosed = generateAppCtx({open: false})

jest.mock("hooks")

const links = ["blog", "now", "uses", "hire me", "contact"]

describe("closed mobile navigation", () => {
    beforeEach(() => {
        useApp.mockReturnValue(mockAppCtxClosed)
    })

    test("shows hamburger", () => {
        render(<MobileNavigation />)
        expect(screen.getByLabelText("menu"))
    })

    test("opens navigation", () => {
        render(<MobileNavigation />)

        userEvent.click(screen.getByLabelText("menu"))
        expect(mockAppCtxClosed.setOpen).toHaveBeenCalledTimes(1)
        expect(mockAppCtxClosed.setOpen).toHaveBeenCalledWith(true)
    })
})

describe("open mobile navigation", () => {
    beforeEach(() => {
        useApp.mockReturnValue(mockAppCtxOpen)
    })

    test("shows menu", () => {
        render(<MobileNavigation />)

        expect(screen.getByLabelText("close"))
        links.forEach(link => expect(screen.getByText(link)))
    })

    test("closes navigation", () => {
        render(<MobileNavigation />)

        userEvent.click(screen.getByLabelText("close"))
        expect(mockAppCtxOpen.setOpen).toHaveBeenCalledTimes(1)
        expect(mockAppCtxOpen.setOpen).toHaveBeenCalledWith(false)
    })
})
