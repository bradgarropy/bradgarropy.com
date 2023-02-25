import {AppContext, AppContextType} from "context"
import {useContext} from "react"

const useApp = (): AppContextType => {
    const appCtx = useContext(AppContext)
    return appCtx
}

export default useApp
