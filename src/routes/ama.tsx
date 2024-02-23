import {redirect} from "@remix-run/node"

export function loader() {
    throw redirect("https://github.com/bradgarropy/ama")
}
