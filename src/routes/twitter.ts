import {redirect} from "react-router"

export const loader = () => {
    throw redirect("https://twitter.com/bradgarropy")
}
