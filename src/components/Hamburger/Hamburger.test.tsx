import {fireEvent, render, screen} from "@testing-library/react"
import Hamburger from "components/Hamburger"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"
import {expect, Mock, test, vi} from "vitest"

const mockAppCtx = generateAppCtx()

vi.mock("hooks")

const mockUseApp = useApp as Mock
mockUseApp.mockReturnValue(mockAppCtx)

test("opens mobile menu", async () => {
    render(<Hamburger />)

    fireEvent(
        screen.getByLabelText("menu"),
        new MouseEvent("click", {bubbles: true}),
    )

    expect(mockAppCtx.setOpen).toHaveBeenCalledTimes(1)
})
