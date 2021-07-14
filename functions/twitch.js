const http = require("@bradgarropy/http")

let token

const handler = async () => {
    const clientId = process.env.TWITCH_CLIENT_ID
    const clientSecret = process.env.TWITCH_CLIENT_SECRET

    console.log(`token: ${token}`)

    if (!token) {
        console.log("no token, authenticating")

        const {access_token} = await http.post(
            `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
        )

        token = access_token
    }

    console.log(`token: ${token}`)

    const channelResponse = await http.get(
        "https://api.twitch.tv/helix/search/channels?query=bradgarropy",
        {
            headers: {
                "authorization": `Bearer ${token}`,
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
