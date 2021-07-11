const http = require("@bradgarropy/http")

const handler = async () => {
    const clientId = process.env.TWITCH_CLIENT_ID
    const clientSecret = process.env.TWITCH_CLIENT_SECRET

    const {access_token} = await http.post(
        `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    )

    const channelResponse = await http.get(
        "https://api.twitch.tv/helix/search/channels?query=bradgarropy",
        {
            headers: {
                "authorization": `Bearer ${access_token}`,
                "client-id": clientId,
            },
        },
    )

    const isLive = channelResponse.data[0].is_live

    const res = {
        statusCode: 200,
        body: JSON.stringify({isLive}),
    }

    return res
}

module.exports = {handler}
