import {redirect} from "react-router"

export const loader = () => {
    throw redirect("https://twitch.tv/bradgarropy")
}
