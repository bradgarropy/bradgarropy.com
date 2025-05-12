import {redirect} from "react-router"

export const loader = () => {
    throw redirect("https://open.spotify.com/show/3TAuVah0Q9BOV5PbwPDGfs")
}
