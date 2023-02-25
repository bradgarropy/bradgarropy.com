import {useTheme} from "hooks"
import {FC} from "react"
import Moon from "svg/moon.svg"
import Sun from "svg/sun.svg"

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
            {theme === "light" ? <Moon /> : null}
            {theme === "dark" ? <Sun /> : null}
        </button>
    )
}

export default ColorTheme
