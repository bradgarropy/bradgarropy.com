import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Hamburger from "~/components/Hamburger"
import useApp from "~/hooks/useApp"
import {generateAppCtx} from "~/test-utils/generators"

const mockAppCtx = generateAppCtx()

jest.mock("~/hooks/useApp")

const mockUseApp = useApp as jest.Mock
mockUseApp.mockReturnValue(mockAppCtx)

test("opens mobile menu", async () => {
    render(<Hamburger />)

    await userEvent.click(screen.getByLabelText("menu"))
    expect(mockAppCtx.setOpen).toHaveBeenCalledTimes(1)
})
