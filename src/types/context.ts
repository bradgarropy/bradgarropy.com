import {Dispatch, SetStateAction} from "react"

type AppCtx = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    theme: string
    setTheme: Dispatch<SetStateAction<string>>
}

export type {AppCtx}
