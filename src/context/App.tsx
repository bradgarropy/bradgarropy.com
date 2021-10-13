import {createContext, FC, useState} from "react"
import {AppCtx} from "types/context"

const AppContext = createContext({} as AppCtx)

const AppProvider: FC = ({children}) => {
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useState("light")

    const context = {
        open,
        setOpen,
        theme,
        setTheme,
    }

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export {AppContext, AppProvider}
