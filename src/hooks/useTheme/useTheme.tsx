import {ThemeContext, ThemeContextType} from "context"
import {useContext} from "react"

const useTheme = (): ThemeContextType => {
    const themeCtx = useContext(ThemeContext)
    return themeCtx
}

export default useTheme
