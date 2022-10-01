import {http} from "@bradgarropy/http"

const getChannelStatus = async (): Promise<boolean> => {
    const {isLive} = await http.get<any>("/api/twitch")
    return isLive
}

export {getChannelStatus}
