import {redirect} from "@remix-run/node"

export const loader = () => {
    throw redirect("https://www.linkedin.com/in/bradgarropy")
}
