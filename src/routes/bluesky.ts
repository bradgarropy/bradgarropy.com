import {redirect} from "@remix-run/node"

export const loader = () => {
    throw redirect("https://bsky.app/profile/bradgarropy.com")
}
