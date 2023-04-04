import type {AppContextType, ThemeContextType} from "~/types/context"

const mockAppCtx: AppContextType = {
    open: false,
    setOpen: jest.fn(),
}

const mockThemeCtx: ThemeContextType = {
    theme: "light",
    setTheme: jest.fn(),
}

export {mockAppCtx, mockThemeCtx}
