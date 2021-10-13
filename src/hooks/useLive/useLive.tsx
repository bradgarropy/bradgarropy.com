import {useEffect, useState} from "react"
import {getChannelStatus} from "utils/api/twitch"

const useLive = (): boolean => {
    const [live, setLive] = useState(false)

    useEffect(() => {
        const execute = async () => {
            const isLive = await getChannelStatus()
            setLive(isLive)
        }

        execute()

        const id = setInterval(() => execute(), 60000)
        return () => clearInterval(id)
    }, [])

    return live
}

export default useLive
