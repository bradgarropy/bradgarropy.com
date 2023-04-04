import {render, screen} from "@testing-library/react"

import Header from "~/components/Header"
import useApp from "~/hooks/useApp"
import useLive from "~/hooks/useLive"
import useTheme from "~/hooks/useTheme"
import {generateAppCtx, generateThemeCtx} from "~/test-utils/generators"

jest.mock("~/hooks/useApp")
jest.mock("~/hooks/useLive")
jest.mock("~/hooks/useTheme")

const mockAppCtx = generateAppCtx()
const mockThemeCtx = generateThemeCtx()

const mockUseApp = useApp as jest.Mock
const mockUseLive = useLive as jest.Mock
const mockUseTheme = useTheme as jest.Mock

mockUseApp.mockReturnValue(mockAppCtx)
mockUseTheme.mockReturnValue(mockThemeCtx)

describe("streaming", () => {
    mockUseLive.mockReturnValue(true)

    test("shows logo", () => {
        render(<Header />)
        expect(screen.getByLabelText("bg"))
    })

    test("shows streaming", () => {
        render(<Header />)
        expect(screen.getByText("🎥 streaming"))
    })
})

describe("not streaming", () => {
    test("does not show streaming", () => {
        mockUseLive.mockReturnValue(false)

        render(<Header />)
        expect(screen.queryByText("🎥 streaming")).toBeNull()
    })
})
