import type {Dispatch, FC, ReactNode, SetStateAction} from "react"
import {createContext, useEffect, useState} from "react"
import {useLocation} from "react-router"

type AppContextType = {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext({} as AppContextType)

type AppProviderProps = {
    children: ReactNode
}

const AppProvider: FC<AppProviderProps> = ({children}) => {
    const [open, setOpen] = useState(false)
    const {pathname} = useLocation()

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    const context: AppContextType = {
        open,
        setOpen,
    }

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export {AppContext, AppProvider}
export type {AppContextType}
