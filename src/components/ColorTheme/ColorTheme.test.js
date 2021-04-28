import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ColorTheme from "components/ColorTheme"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"

const mockAppCtxLight = generateAppCtx({theme: "light"})
const mockAppCtxDark = generateAppCtx({theme: "dark"})

jest.mock("hooks")

test("toggles dark mode", () => {
    useApp.mockReturnValue(mockAppCtxLight)

    render(<ColorTheme />)

    userEvent.click(screen.getByLabelText("dark"))
    expect(mockAppCtxLight.setTheme).toHaveBeenCalledTimes(1)
    expect(mockAppCtxLight.setTheme).toHaveBeenCalledWith("dark")
})

test("toggles light mode", () => {
    useApp.mockReturnValue(mockAppCtxDark)

    render(<ColorTheme />)

    userEvent.click(screen.getByLabelText("light"))
    expect(mockAppCtxDark.setTheme).toHaveBeenCalledTimes(1)
    expect(mockAppCtxDark.setTheme).toHaveBeenCalledWith("light")
})
