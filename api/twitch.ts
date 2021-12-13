import {get, post} from "@bradgarropy/http"
import {VercelRequest, VercelResponse} from "@vercel/node"

type ChannelStatus = {
    isLive: boolean
}

const handler = async (req: VercelRequest, res: VercelResponse) => {
    const clientId = process.env.TWITCH_CLIENT_ID
    const clientSecret = process.env.TWITCH_CLIENT_SECRET

    const {access_token} = await post(
        `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    )

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const channelResponse: any = await get(
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
