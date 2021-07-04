const fetch = require("node-fetch")

const handler = async () => {
    const clientId = process.env.TWITCH_CLIENT_ID
    const clientSecret = process.env.TWITCH_CLIENT_SECRET

    const tokenResponse = await fetch(
        `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
        {
            method: "POST",
        },
    )

    const tokenJson = await tokenResponse.json()
    const token = tokenJson.access_token

    const channelResponse = await fetch(
        "https://api.twitch.tv/helix/search/channels?query=bradgarropy",
        {
            headers: {
                "authorization": `Bearer ${token}`,
                "client-id": clientId,
            },
        },
    )

    const channelJson = await channelResponse.json()
    const isLive = channelJson.data[0].is_live

    const res = {
        statusCode: 200,
        body: JSON.stringify(isLive),
    }

    return res
}

module.exports = {handler}
