import {useApp} from "hooks"
import {FC, useEffect} from "react"
import Moon from "svg/moon.svg"
import Sun from "svg/sun.svg"

const ColorTheme: FC = () => {
    const {theme, setTheme} = useApp()
    const label = theme === "light" ? "dark" : "light"

    useEffect(() => {
        // change colors
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
