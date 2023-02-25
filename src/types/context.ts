import {Dispatch, SetStateAction} from "react"
import {Theme} from "types/theme"

type AppContextType = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

type ThemeContextType = {
    theme: Theme
    setTheme: Dispatch<SetStateAction<Theme>>
}

export type {AppContextType, ThemeContextType}
