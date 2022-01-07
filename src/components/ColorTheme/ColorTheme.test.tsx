import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ColorTheme from "components/ColorTheme"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"

console.log(useApp)

const mockAppCtxLight = generateAppCtx({theme: "light"})
const mockAppCtxDark = generateAppCtx({theme: "dark"})

console.log(mockAppCtxLight)
console.log(mockAppCtxDark)

jest.mock("hooks")

console.log(useApp)

const mockUseApp = useApp as jest.Mock
console.log(mockUseApp)

test("toggles dark mode", () => {
    console.log(mockUseApp)
    mockUseApp.mockReturnValue(mockAppCtxLight)

    render(<ColorTheme />)

    userEvent.click(screen.getByLabelText("dark"))
    expect(mockAppCtxLight.setTheme).toHaveBeenCalledTimes(1)
    expect(mockAppCtxLight.setTheme).toHaveBeenCalledWith("dark")
})

test("toggles light mode", () => {
    mockUseApp.mockReturnValue(mockAppCtxDark)

    render(<ColorTheme />)

    userEvent.click(screen.getByLabelText("light"))
    expect(mockAppCtxDark.setTheme).toHaveBeenCalledTimes(1)
    expect(mockAppCtxDark.setTheme).toHaveBeenCalledWith("light")
})
