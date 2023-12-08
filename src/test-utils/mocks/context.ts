import {vi} from "vitest"

import type {AppContextType, ThemeContextType} from "~/types/context"

const mockAppCtx: AppContextType = {
    open: false,
    setOpen: vi.fn(),
}

const mockThemeCtx: ThemeContextType = {
    theme: "light",
    setTheme: vi.fn(),
}

export {mockAppCtx, mockThemeCtx}
