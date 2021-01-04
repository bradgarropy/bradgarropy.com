import PropTypes from "prop-types"
import {createContext, useState} from "react"

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [open, setOpen] = useState(false)

    const context = {
        open,
        setOpen,
    }

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

AppProvider.propTypes = {
    children: PropTypes.node,
}

export {AppContext, AppProvider}
