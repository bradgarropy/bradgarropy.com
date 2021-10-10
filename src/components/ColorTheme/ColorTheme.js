import {useApp} from "hooks"
import {useEffect} from "react"
import Moon from "svg/moon.svg"
import Sun from "svg/sun.svg"

import * as styles from "./ColorTheme.module.css"

const ColorTheme = () => {
    const {theme, setTheme} = useApp()
    const label = theme === "light" ? "dark" : "light"

    useEffect(() => {
        const root = document.documentElement

        root.style.setProperty(
            "--background",
            theme === "light" ? "var(--white)" : "var(--black)",
        )

        root.style.setProperty(
            "--text",
            theme === "light" ? "var(--black)" : "var(--white)",
        )
    }, [theme])

    const onClick = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <button
            className={styles.themeToggle}
            onClick={onClick}
            aria-label={label}
        >
            {theme === "light" ? <Moon /> : <Sun />}
        </button>
    )
}

export default ColorTheme
