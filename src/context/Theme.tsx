import type {FC, ReactNode} from "react"
import {createContext, useEffect, useRef, useState} from "react"
import {useFetcher} from "react-router"

import type {ThemeContextType} from "~/types/context"
import type {Theme} from "~/types/theme"

const ThemeContext = createContext({} as ThemeContextType)

type ThemeProviderProps = {
    defaultTheme?: Theme
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({
    defaultTheme = "light",
    children,
}) => {
    const fetcher = useFetcher()
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const themeRef = useRef(theme)

    useEffect(() => {
        switch (theme) {
            case "light":
                document.documentElement.classList.remove("dark")
                document.documentElement.classList.add("light")
                break

            case "dark":
                document.documentElement.classList.remove("light")
                document.documentElement.classList.add("dark")
                break
        }
    }, [theme])

    useEffect(() => {
        if (theme === themeRef.current) {
            return
        }

        themeRef.current = theme
        fetcher.submit({theme}, {action: "api/theme", method: "post"})

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])

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
