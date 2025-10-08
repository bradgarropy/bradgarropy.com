import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type {Mock} from "vitest"
import {beforeEach, describe, expect, test, vi} from "vitest"

import MobileNavigation from "~/components/MobileNavigation"
import useApp from "~/hooks/useApp"
import {generateAppCtx} from "~/test-utils/generators"

const mockAppCtxOpen = generateAppCtx({open: true})
const mockAppCtxClosed = generateAppCtx({open: false})

vi.mock("~/hooks/useApp")

const mockUseApp = useApp as Mock

const links = ["blog", "now", "uses", "hire me", "contact"]

describe("closed mobile navigation", () => {
    beforeEach(() => {
        mockUseApp.mockReturnValue(mockAppCtxClosed)
    })

    test("shows hamburger", () => {
        render(<MobileNavigation />)
        expect(screen.getByLabelText("menu")).toBeInTheDocument()
    })

    test("opens navigation", async () => {
        render(<MobileNavigation />)

        await userEvent.click(screen.getByLabelText("menu"))
        expect(mockAppCtxClosed.setOpen).toHaveBeenCalledExactlyOnceWith(true)
    })
})

describe("open mobile navigation", () => {
    beforeEach(() => {
        mockUseApp.mockReturnValue(mockAppCtxOpen)
    })

    test("shows menu", () => {
        render(<MobileNavigation />)

        expect(screen.getByLabelText("close")).toBeInTheDocument()

        links.forEach(link => {
            expect(screen.getByText(link)).toBeInTheDocument()
        })
    })

    test("closes navigation", async () => {
        render(<MobileNavigation />)

        await userEvent.click(screen.getByLabelText("close"))
        expect(mockAppCtxOpen.setOpen).toHaveBeenCalledTimes(1)
        expect(mockAppCtxOpen.setOpen).toHaveBeenCalledExactlyOnceWith(false)
    })
})
