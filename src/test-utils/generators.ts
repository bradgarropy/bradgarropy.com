import {
    mockAppCtx,
    mockNow,
    mockPostFrontmatter,
    mockTestimonial,
    mockThemeCtx,
} from "~/test-utils/mocks"
import type {AppContextType, ThemeContextType} from "~/types/context"
import type {Markdown} from "~/types/markdown"
import type {NowFrontmatter} from "~/types/now"
import type {PostFrontmatter} from "~/types/post"
import type {TestimonialFrontmatter} from "~/types/testimonial"

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

const generatePageFile = (): Markdown<Record<string, never>> => {
    const file = {
        markdown: "Mock page.",
        attributes: {},
    }

    return file
}

const generateNowFile = (
    overrides?: Partial<NowFrontmatter>,
): Markdown<NowFrontmatter> => {
    const file = {
        markdown: "Mock now.",
        attributes: {
            ...mockNow.frontmatter,
            ...overrides,
        },
    }

    return file
}

const generateTestimonialFile = (
    overrides?: Partial<TestimonialFrontmatter>,
): Markdown<TestimonialFrontmatter> => {
    const file = {
        markdown: "Mock testimonial.",
        attributes: {
            ...mockTestimonial.frontmatter,
            ...overrides,
        },
    }

    return file
}

export {
    generateAppCtx,
    generateNowFile,
    generatePageFile,
    generatePostFile,
    generateTestimonialFile,
    generateThemeCtx,
}
