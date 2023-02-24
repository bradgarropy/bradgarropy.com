import {Dispatch, SetStateAction, useEffect, useRef, useState} from "react"

type Theme = "light" | "dark"

const useTheme = (
    defaultTheme: Theme = "light",
): [Theme, Dispatch<SetStateAction<Theme>>] => {
    const initialRender = useRef(true)
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return
        }

        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    return [theme, setTheme]
}

export default useTheme
