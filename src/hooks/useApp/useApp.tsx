import {useContext} from "react"

import type {AppContextType} from "~/context/App"
import {AppContext} from "~/context/App"

const useApp = (): AppContextType => {
    const appCtx = useContext(AppContext)
    return appCtx
}

export default useApp
