import {useFetcher} from "@remix-run/react"
import type {FC, ReactNode} from "react"
import {createContext, useEffect, useState} from "react"

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

    useEffect(() => {
        fetcher.submit({theme}, {action: "api/theme", method: "post"})

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
