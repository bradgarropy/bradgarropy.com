import {get} from "@bradgarropy/http"

const getChannelStatus = async (): Promise<boolean> => {
    const {isLive} = await get("/api/twitch")
    return isLive
}

export {getChannelStatus}
