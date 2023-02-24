import {Dispatch, SetStateAction, useEffect, useState} from "react"

type Theme = "light" | "dark"

const useTheme = (): {
    theme: Theme
    setTheme: Dispatch<SetStateAction<Theme>>
} => {
    const [theme, setTheme] = useState<Theme>()

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme
        setTheme(localTheme ?? "light")
    }, [])

    useEffect(() => {
        if (!theme) {
            return
        }

        if (theme === "dark") {
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        } else {
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    return {theme, setTheme}
}

export default useTheme
