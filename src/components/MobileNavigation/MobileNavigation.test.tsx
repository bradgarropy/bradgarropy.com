import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import MobileNavigation from "components/MobileNavigation"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"
import {beforeEach, describe, expect, Mock, test, vi} from "vitest"

const mockAppCtxOpen = generateAppCtx({open: true})
const mockAppCtxClosed = generateAppCtx({open: false})

vi.mock("hooks")

const mockUseApp = useApp as Mock

const links = ["blog", "now", "uses", "hire me", "contact"]

describe("closed mobile navigation", () => {
    beforeEach(() => {
        mockUseApp.mockReturnValue(mockAppCtxClosed)
    })

    test("shows hamburger", () => {
        render(<MobileNavigation />)
        expect(screen.getByLabelText("menu"))
    })

    test("opens navigation", async () => {
        render(<MobileNavigation />)

        await userEvent.click(screen.getByLabelText("menu"))
        expect(mockAppCtxClosed.setOpen).toHaveBeenCalledTimes(1)
        expect(mockAppCtxClosed.setOpen).toHaveBeenCalledWith(true)
    })
})

describe("open mobile navigation", () => {
    beforeEach(() => {
        mockUseApp.mockReturnValue(mockAppCtxOpen)
    })

    test("shows menu", () => {
        render(<MobileNavigation />)

        expect(screen.getByLabelText("close"))
        links.forEach(link => expect(screen.getByText(link)))
    })

    test("closes navigation", async () => {
        render(<MobileNavigation />)

        await userEvent.click(screen.getByLabelText("close"))
        expect(mockAppCtxOpen.setOpen).toHaveBeenCalledTimes(1)
        expect(mockAppCtxOpen.setOpen).toHaveBeenCalledWith(false)
    })
})
