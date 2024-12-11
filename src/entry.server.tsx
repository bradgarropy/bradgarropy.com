import {PassThrough} from "node:stream"

import type {EntryContext} from "@remix-run/node"
import {createReadableStreamFromReadable} from "@remix-run/node"
import {RemixServer} from "@remix-run/react"
import {isbot} from "isbot"
import {renderToPipeableStream} from "react-dom/server"

const streamTimeout = 5000

const handleRequest = (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
) => {
    return isbot(request.headers.get("user-agent"))
        ? handleBotRequest(
              request,
              responseStatusCode,
              responseHeaders,
              remixContext,
          )
        : handleBrowserRequest(
              request,
              responseStatusCode,
              responseHeaders,
              remixContext,
          )
}

const handleBotRequest = (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
) => {
    return new Promise((resolve, reject) => {
        let shellRendered = false
        const {pipe, abort} = renderToPipeableStream(
            <RemixServer
                context={remixContext}
                url={request.url}
                abortDelay={streamTimeout}
            />,
            {
                onAllReady() {
                    shellRendered = true
                    const body = new PassThrough()
                    const stream = createReadableStreamFromReadable(body)

                    responseHeaders.set("Content-Type", "text/html")

                    resolve(
                        new Response(stream, {
                            headers: responseHeaders,
                            status: responseStatusCode,
                        }),
                    )

                    pipe(body)
                },
                onShellError(error: unknown) {
                    reject(error)
                },
                onError(error: unknown) {
                    responseStatusCode = 500
                    // Log streaming rendering errors from inside the shell.  Don't log
                    // errors encountered during initial shell rendering since they'll
                    // reject and get logged in handleDocumentRequest.
                    if (shellRendered) {
                        console.error(error)
                    }
                },
            },
        )

        setTimeout(abort, streamTimeout + 1000)
    })
}

const handleBrowserRequest = (
    request: Request,
    responseStatusCode: number,
    responseHeaders: Headers,
    remixContext: EntryContext,
) => {
    return new Promise((resolve, reject) => {
        let shellRendered = false
        const {pipe, abort} = renderToPipeableStream(
            <RemixServer
                context={remixContext}
                url={request.url}
                abortDelay={streamTimeout}
            />,
            {
                onShellReady() {
                    shellRendered = true
                    const body = new PassThrough()
                    const stream = createReadableStreamFromReadable(body)

                    responseHeaders.set("Content-Type", "text/html")

                    resolve(
                        new Response(stream, {
                            headers: responseHeaders,
                            status: responseStatusCode,
                        }),
                    )

                    pipe(body)
                },
                onShellError(error: unknown) {
                    reject(error)
                },
                onError(error: unknown) {
                    responseStatusCode = 500
                    // Log streaming rendering errors from inside the shell.  Don't log
                    // errors encountered during initial shell rendering since they'll
                    // reject and get logged in handleDocumentRequest.
                    if (shellRendered) {
                        console.error(error)
                    }
                },
            },
        )

        setTimeout(abort, streamTimeout + 1000)
    })
}

export default handleRequest
export {streamTimeout}
