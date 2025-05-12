import {redirect} from "react-router"

export const loader = () => {
    throw redirect("https://cottonbureau.com/people/brad-garropy")
}
