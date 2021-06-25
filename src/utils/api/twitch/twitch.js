const getChannelStatus = async () => {
    const response = await fetch(
        "https://api.twitch.tv/helix/search/channels?query=bradgarropy",
        {
            headers: {
                "Authorization": `Bearer ${process.env.GATSBY_TWITCH_TOKEN}`,
                "Client-Id": process.env.GATSBY_TWITCH_CLIENT_ID,
            },
        },
    )

    const results = await response.json()
    const isLive = results.data[0].is_live

    return isLive
}

export {getChannelStatus}
