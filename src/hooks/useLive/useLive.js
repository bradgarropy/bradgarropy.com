import {useEffect, useState} from "react"

const useLive = () => {
    const [live, setLive] = useState(false)

    useEffect(() => {
        const getLive = async () => {
            const response = await fetch(
                "https://api.twitch.tv/helix/search/channels?query=bradgarropy",
                {
                    headers: {
                        "Authorization":
                            "Bearer gbwex035lkontnpe1x07jb99iros1o",
                        "Client-Id": "6syq0gg8ahqoos7qp9huxz7sx0amj1",
                    },
                },
            )

            const results = await response.json()
            const isLive = results.data[0].is_live

            setLive(isLive)
        }

        getLive()
    }, [])

    return live
}

export default useLive
