import {useApp} from "hooks"
import {FC, useEffect} from "react"
import Moon from "svg/moon.svg"
import Sun from "svg/sun.svg"

const ColorTheme: FC = () => {
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

        root.style.setProperty(
            "--snow",
            theme === "light" ? "var(--darkGrey)" : "var(--white)",
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
            className="cursor-pointer border-none bg-transparent p-0 h-6"
            onClick={onClick}
            aria-label={label}
        >
            {theme === "light" ? <Moon /> : <Sun />}
        </button>
    )
}

export default ColorTheme
