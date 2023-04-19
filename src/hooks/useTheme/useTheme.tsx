import {useContext} from "react"

import type {ThemeContextType} from "~/context/Theme"
import {ThemeContext} from "~/context/Theme"

const useTheme = (): ThemeContextType => {
    const themeCtx = useContext(ThemeContext)
    return themeCtx
}

export default useTheme
