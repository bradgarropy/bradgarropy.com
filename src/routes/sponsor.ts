import {redirect} from "react-router"

export const loader = () => {
    throw redirect("https://github.com/sponsors/bradgarropy")
}
