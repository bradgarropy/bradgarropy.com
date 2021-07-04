const getChannelStatus = async () => {
    const response = await fetch("/api/twitch")
    const isLive = await response.json()

    return isLive
}

export {getChannelStatus}
