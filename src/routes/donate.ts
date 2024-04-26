import {redirect} from "@remix-run/node"

export const loader = () => {
    throw redirect("https://buy.stripe.com/5kA7upbNW9wW27CeUU")
}
