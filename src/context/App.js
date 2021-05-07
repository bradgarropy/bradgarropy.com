import {useLive} from "hooks"
import PropTypes from "prop-types"
import {createContext, useState} from "react"

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [open, setOpen] = useState(false)
    const [theme, setTheme] = useState("light")
    const live = useLive()

    const context = {
        open,
        setOpen,
        theme,
        setTheme,
        live,
    }

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
    children: PropTypes.node,
}

export {AppContext, AppProvider}
