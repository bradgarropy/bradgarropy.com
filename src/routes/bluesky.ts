import {redirect} from "react-router"

export const loader = () => {
    throw redirect("https://bsky.app/profile/bradgarropy.com")
}
