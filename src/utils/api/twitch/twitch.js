import {get} from "@bradgarropy/http"

const getChannelStatus = async () => {
    const {isLive} = await get("/api/twitch")
    return isLive
}

export {getChannelStatus}
