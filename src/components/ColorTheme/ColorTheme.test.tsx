import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ColorTheme from "components/ColorTheme"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"
import {expect, Mock, test, vi} from "vitest"

const mockAppCtxLight = generateAppCtx({theme: "light"})
const mockAppCtxDark = generateAppCtx({theme: "dark"})

vi.mock("hooks")

const mockUseApp = useApp as Mock

test("toggles dark mode", async () => {
    mockUseApp.mockReturnValue(mockAppCtxLight)

    render(<ColorTheme />)

    await userEvent.click(screen.getByLabelText("dark"))
    expect(mockAppCtxLight.setTheme).toHaveBeenCalledTimes(1)
    expect(mockAppCtxLight.setTheme).toHaveBeenCalledWith("dark")
})

test("toggles light mode", async () => {
    mockUseApp.mockReturnValue(mockAppCtxDark)

    render(<ColorTheme />)

    await userEvent.click(screen.getByLabelText("light"))
    expect(mockAppCtxDark.setTheme).toHaveBeenCalledTimes(1)
    expect(mockAppCtxDark.setTheme).toHaveBeenCalledWith("light")
})
