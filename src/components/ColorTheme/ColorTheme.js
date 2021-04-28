import {useApp} from "hooks"
import {useEffect} from "react"
import styled from "styled-components"
import Moon from "svg/moon.svg"
import Sun from "svg/sun.svg"

const ThemeToggle = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    padding: 0rem;
    height: 1.5rem;
`

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
        <ThemeToggle onClick={onClick} aria-label={label}>
            {theme === "light" ? <Moon /> : <Sun />}
        </ThemeToggle>
    )
}

export default ColorTheme
