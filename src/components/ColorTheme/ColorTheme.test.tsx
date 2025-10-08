import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type {Mock} from "vitest"
import {expect, test, vi} from "vitest"

import ColorTheme from "~/components/ColorTheme"
import useTheme from "~/hooks/useTheme"
import {generateThemeCtx} from "~/test-utils/generators"

const mockThemeCtxLight = generateThemeCtx({theme: "light"})
const mockThemeCtxDark = generateThemeCtx({theme: "dark"})

vi.mock("~/hooks/useTheme")

const mockUseTheme = useTheme as Mock

test("toggles dark mode", async () => {
    mockUseTheme.mockReturnValue(mockThemeCtxLight)

    render(<ColorTheme />)

    await userEvent.click(screen.getByLabelText("dark"))
    expect(mockThemeCtxLight.setTheme).toHaveBeenCalledExactlyOnceWith("dark")
})

test("toggles light mode", async () => {
    mockUseTheme.mockReturnValue(mockThemeCtxDark)

    render(<ColorTheme />)

    await userEvent.click(screen.getByLabelText("light"))
    expect(mockThemeCtxDark.setTheme).toHaveBeenCalledTimes(1)
    expect(mockThemeCtxDark.setTheme).toHaveBeenCalledExactlyOnceWith("light")
})
