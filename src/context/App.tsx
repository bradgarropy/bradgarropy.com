import {createContext, FC, ReactNode, useEffect, useRef, useState} from "react"
import {AppCtx} from "types/context"

const AppContext = createContext({} as AppCtx)

type AppProviderProps = {
    children: ReactNode
}

const AppProvider: FC<AppProviderProps> = ({children}) => {
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useState("light")
    const initialRender = useRef(true)

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false
            return
        }

        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    const context = {
        open,
        setOpen,
        theme,
        setTheme,
    }

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

export {AppContext, AppProvider}
