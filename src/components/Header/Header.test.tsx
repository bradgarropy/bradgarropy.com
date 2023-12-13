import {render, screen} from "@testing-library/react"
import type {Mock} from "vitest"
import {describe, expect, test, vi} from "vitest"

import Header from "~/components/Header"
import useApp from "~/hooks/useApp"
import useLive from "~/hooks/useLive"
import useTheme from "~/hooks/useTheme"
import {generateAppCtx, generateThemeCtx} from "~/test-utils/generators"

vi.mock("~/hooks/useApp")
vi.mock("~/hooks/useLive")
vi.mock("~/hooks/useTheme")

const mockAppCtx = generateAppCtx()
const mockThemeCtx = generateThemeCtx()

const mockUseApp = useApp as Mock
const mockUseLive = useLive as Mock
const mockUseTheme = useTheme as Mock

mockUseApp.mockReturnValue(mockAppCtx)
mockUseTheme.mockReturnValue(mockThemeCtx)

describe("streaming", () => {
    mockUseLive.mockReturnValue(true)

    test("shows logo", () => {
        render(<Header />)
        expect(screen.getByLabelText("bg")).toBeInTheDocument()
    })

    test("shows streaming", () => {
        render(<Header />)
        expect(screen.getByText("🎥 streaming")).toBeInTheDocument()
    })
})

describe("not streaming", () => {
    test("does not show streaming", () => {
        mockUseLive.mockReturnValue(false)

        render(<Header />)
        expect(screen.queryByText("🎥 streaming")).not.toBeInTheDocument()
    })
})
