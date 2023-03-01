import {createContext, FC, ReactNode, useEffect, useState} from "react"
import {ThemeContextType} from "types/context"
import {Theme} from "types/theme"

const ThemeContext = createContext({} as ThemeContextType)

type ThemeProviderProps = {
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>()

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme
        setTheme(localTheme ?? "light")
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        }

        if (theme === "light") {
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
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
