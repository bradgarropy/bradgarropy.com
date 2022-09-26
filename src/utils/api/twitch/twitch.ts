import {http} from "@bradgarropy/http"

const getChannelStatus = async (): Promise<boolean> => {
    const {isLive} = await http.get("/api/twitch")
    return isLive
}

export {getChannelStatus}
