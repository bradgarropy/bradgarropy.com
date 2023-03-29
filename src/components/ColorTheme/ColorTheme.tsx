import {MoonIcon, SunIcon} from "components/Icons"
import {useTheme} from "hooks"
import type {FC} from "react"

const ColorTheme: FC = () => {
    const {theme, setTheme} = useTheme()
    const label = theme === "light" ? "dark" : "light"

    const onClick = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <button
            className="h-6 cursor-pointer border-none bg-transparent p-0 transition duration-300"
            onClick={onClick}
            aria-label={label}
        >
            {theme === "light" ? <MoonIcon /> : null}
            {theme === "dark" ? <SunIcon /> : null}
        </button>
    )
}

export default ColorTheme
