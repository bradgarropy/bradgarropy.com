import {http} from "@bradgarropy/http"

import type {ChannelStatus} from "~/routes/api.twitch"

const getChannelStatus = async (): Promise<boolean> => {
    const {isLive} = await http.get<ChannelStatus>("/api/twitch")
    return isLive
}

export {getChannelStatus}
