import type {EntryContext} from "@remix-run/node"
import {RemixServer} from "@remix-run/react"
import {renderToString} from "react-dom/server"

const handleRequest = (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
) => {
    const markup = renderToString(
        <RemixServer context={remixContext} url={request.url} />,
    )

    const body = "<!DOCTYPE html>" + markup

    responseHeaders.set("Content-Type", "text/html")

    const response = new Response(body, {
        status: responseStatusCode,
        headers: responseHeaders,
    })

    return response
}

export default handleRequest
