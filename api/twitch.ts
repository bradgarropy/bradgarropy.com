import {get, post} from "@bradgarropy/http"
import {withSentry} from "@sentry/nextjs"
import {NextApiHandler, NextApiRequest, NextApiResponse} from "next"

type ChannelStatus = {
    isLive: boolean
}

const handler: NextApiHandler = async (req, res) => {
    console.log(process.env.NEXT_PUBLIC_SENTRY_DSN)
    throw new Error("Sentry Backend Error | Twitch")

    // const clientId = process.env.TWITCH_CLIENT_ID
    // const clientSecret = process.env.TWITCH_CLIENT_SECRET

    // const {access_token} = await post(
    //     `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    // )

    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const channelResponse: any = await get(
    //     "https://api.twitch.tv/helix/search/channels?query=bradgarropy",
    //     {
    //         headers: {
    //             "authorization": `Bearer ${access_token}`,
    //             "client-id": clientId,
    //         },
    //     },
    // )

    // const channel = channelResponse.data.find(
    //     channel => channel["broadcaster_login"] === "bradgarropy",
    // )

    // const channelStatus: ChannelStatus = {isLive: channel.is_live}
    // res.status(200).json(channelStatus)
}

export default withSentry(handler)
