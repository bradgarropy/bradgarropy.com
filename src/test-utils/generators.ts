import {mockAppCtx, mockThemeCtx} from "~/test-utils/mocks"
import type {AppContextType, ThemeContextType} from "~/types/context"

const generateAppCtx = (
    overrides?: Partial<AppContextType>,
): AppContextType => {
    const appCtx = {
        ...mockAppCtx,
        ...overrides,
    }

    return appCtx
}

const generateThemeCtx = (
    overrides?: Partial<ThemeContextType>,
): ThemeContextType => {
    const themeCtx = {
        ...mockThemeCtx,
        ...overrides,
    }

    return themeCtx
}

export {generateAppCtx, generateThemeCtx}
