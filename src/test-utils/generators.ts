import {mockAppCtx, mockPostFrontmatter, mockThemeCtx} from "~/test-utils/mocks"
import type {AppContextType, ThemeContextType} from "~/types/context"
import type {Markdown} from "~/types/markdown"
import type {PostFrontmatter} from "~/types/post"

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

const generatePostFile = (
    overrides?: Partial<PostFrontmatter>,
): Markdown<PostFrontmatter> => {
    const file = {
        markdown: "Mock post.",
        attributes: {
            ...mockPostFrontmatter,
            ...overrides,
        },
    }

    return file
}

export {generateAppCtx, generatePostFile, generateThemeCtx}
