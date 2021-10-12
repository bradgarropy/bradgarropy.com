import {AppContext} from "context"
import {useContext} from "react"
import {AppCtx} from "types/context"

const useApp = (): AppCtx => {
    const appCtx = useContext(AppContext)
    return appCtx
}

export default useApp
