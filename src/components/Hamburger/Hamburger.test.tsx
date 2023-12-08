import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import Hamburger from "~/components/Hamburger"
import useApp from "~/hooks/useApp"
import {generateAppCtx} from "~/test-utils/generators"

const mockAppCtx = generateAppCtx()

vi.mock("~/hooks/useApp")

const mockUseApp = useApp as Mock
mockUseApp.mockReturnValue(mockAppCtx)

test("opens mobile menu", async () => {
    render(<Hamburger />)

    await userEvent.click(screen.getByLabelText("menu"))
    expect(mockAppCtx.setOpen).toHaveBeenCalledTimes(1)
})
