import type {LinkDescriptor, LinksFunction, MetaFunction} from "@remix-run/node"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react"
import tailwindStyles from "styles/global.css"

const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "💿 remix starter",
    viewport: "width=device-width,initial-scale=1",
})

const links: LinksFunction = () => {
    const links: LinkDescriptor[] = [
        {
            rel: "stylesheet",
            href: tailwindStyles,
        },
        {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
        },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: "anonymous",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Righteous&family=Open+Sans:wght@400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800;900&display=swap",
        },
        {
            rel: "icon",
            href: "https://res.cloudinary.com/bradgarropy/image/upload/f_auto,q_auto/bradgarropy.com/site/favicon.ico",
        },
    ]

    return links
}

const App = () => {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>

            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export default App
export {links, meta}
