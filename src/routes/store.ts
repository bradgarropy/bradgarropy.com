import {redirect} from "@remix-run/node"

export const loader = () => {
    throw redirect("https://cottonbureau.com/people/brad-garropy")
}
