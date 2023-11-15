import type {LinksFunction, MetaDescriptor, MetaFunction} from "@remix-run/node"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react"

import {AppProvider} from "~/context/App"
import {ThemeProvider} from "~/context/Theme"
import styles from "~/styles/tailwind.css"
import {createImageUrl} from "~/utils/cloudinary"

import pkg from "../package.json"

export const meta: MetaFunction = () => {
    const meta: MetaDescriptor[] = [
        {
            title: "💿 remix starter",
        },
    ]

    return meta
}

export const links: LinksFunction = () => {
    const links = [
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "icon",
            href: createImageUrl("/site/favicon.ico"),
        },
    ]

    return links
}

const App = () => {
    return (
        <html lang="en" className="overflow-y-scroll">
            <head>
                <meta charSet="utf-8" />
                <meta name="keywords" content={pkg.keywords.join(",")} />

                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />

                <meta property="og:url" content="https://bradgarropy.com" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="🏠 my home on the web" />

                <meta
                    property="og:image"
                    content={createImageUrl("/social/facebook.png")}
                />

                <meta property="twitter:card" content="summary" />
                <meta property="twitter:site" content="@bradgarropy" />

                <meta
                    property="twitter:title"
                    content="🏠 my home on the web"
                />

                <meta
                    property="twitter:image"
                    content={createImageUrl("/social/twitter.png")}
                />

                <Meta />
                <Links />
            </head>

            <body className="bg-white transition duration-300 dark:bg-black">
                <ThemeProvider>
                    <AppProvider>
                        <Outlet />
                    </AppProvider>
                </ThemeProvider>

                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export default App
