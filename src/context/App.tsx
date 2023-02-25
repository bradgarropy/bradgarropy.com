import {
    createContext,
    Dispatch,
    FC,
    ReactNode,
    SetStateAction,
    useState,
} from "react"

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

    const context: AppContextType = {
        open,
        setOpen,
    }

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export {AppContext, AppProvider}
export type {AppContextType}
