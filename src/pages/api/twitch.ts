import {http} from "@bradgarropy/http"
import {NextApiHandler} from "next"

type ChannelStatus = {
    isLive: boolean
}

type TwitchOauth = {
    access_token: string
    expires_in: number
    refresh_token: string
    scope: string[]
    token_type: string
}

type TwitchSearch = {
    data: TwitchChannel[]
}

type TwitchChannel = {
    broadcaster_language: string
    broadcaster_login: string
    display_name: string
    game_id: string
    id: string
    is_live: boolean
    tag_ids: string[]
    thumbnail_url: string
    title: string
    started_at: string
}

const handler: NextApiHandler = async (req, res) => {
    const clientId = process.env.TWITCH_CLIENT_ID
    const clientSecret = process.env.TWITCH_CLIENT_SECRET

    const {access_token} = await http.post<TwitchOauth>(
        `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    )

    const channelResponse = await http.get<TwitchSearch>(
        "https://api.twitch.tv/helix/search/channels?query=bradgarropy",
        {
            headers: {
                "authorization": `Bearer ${access_token}`,
                "client-id": clientId,
            },
        },
    )

    const channel = channelResponse.data.find(
        channel => channel["broadcaster_login"] === "bradgarropy",
    )

    const channelStatus: ChannelStatus = {isLive: channel.is_live}
    res.status(200).json(channelStatus)
}

export default handler
export type {ChannelStatus}
