import {redirect} from "@remix-run/node"

export const loader = () => {
    throw redirect("https://linkedin.com/in/bradgarropy")
}
