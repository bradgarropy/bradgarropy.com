import type {Dispatch, SetStateAction} from "react"
import type {Theme} from "types/theme"

type AppContextType = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

type ThemeContextType = {
    theme: Theme
    setTheme: Dispatch<SetStateAction<Theme>>
}

export type {AppContextType, ThemeContextType}
