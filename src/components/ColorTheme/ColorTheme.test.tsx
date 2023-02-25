import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ColorTheme from "components/ColorTheme"
import {useTheme} from "hooks"
import {generateThemeCtx} from "test-utils/generators"

const mockThemeCtxLight = generateThemeCtx({theme: "light"})
const mockThemeCtxDark = generateThemeCtx({theme: "dark"})

jest.mock("hooks")

const mockUseTheme = useTheme as jest.Mock

test("toggles dark mode", async () => {
    mockUseTheme.mockReturnValue(mockThemeCtxLight)

    render(<ColorTheme />)

    await userEvent.click(screen.getByLabelText("dark"))
    expect(mockThemeCtxLight.setTheme).toHaveBeenCalledTimes(1)
    expect(mockThemeCtxLight.setTheme).toHaveBeenCalledWith("dark")
})

test("toggles light mode", async () => {
    mockUseTheme.mockReturnValue(mockThemeCtxDark)

    render(<ColorTheme />)

    await userEvent.click(screen.getByLabelText("light"))
    expect(mockThemeCtxDark.setTheme).toHaveBeenCalledTimes(1)
    expect(mockThemeCtxDark.setTheme).toHaveBeenCalledWith("light")
})
