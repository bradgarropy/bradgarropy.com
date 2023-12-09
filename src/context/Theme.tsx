import type {FC, ReactNode} from "react"
import {createContext, useState} from "react"

import type {ThemeContextType} from "~/types/context"
import type {Theme} from "~/types/theme"

const ThemeContext = createContext({} as ThemeContextType)

type ThemeProviderProps = {
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "object") {
            return null
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const theme = mediaQuery.matches ? "dark" : "light"

        return theme
    })

    const context: ThemeContextType = {
        theme,
        setTheme,
    }

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}
export type {Theme, ThemeContextType}
