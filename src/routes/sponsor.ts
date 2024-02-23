import {redirect} from "@remix-run/node"

export const loader = () => {
    throw redirect("https://github.com/sponsors/bradgarropy")
}
