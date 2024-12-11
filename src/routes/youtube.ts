import {redirect} from "@remix-run/node"

export const loader = () => {
    throw redirect("https://youtube.com/bradgarropy")
}
