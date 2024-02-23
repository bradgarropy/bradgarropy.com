import {redirect} from "@remix-run/node"
import {redirects} from "vercel.json"

console.log(redirects)

const checkRedirects = (request: Request) => {
    const url = new URL(request.url)

    const entry = redirects.find(redirect => redirect.source === url.pathname)

    if (entry) {
        const status = entry.permanent ? 308 : 307
        return redirect(entry.destination, {status})
    }
}

export {checkRedirects}
