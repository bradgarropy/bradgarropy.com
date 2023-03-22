import type {
    LinkDescriptor,
    LinksFunction,
    MetaDescriptor,
    MetaFunction,
} from "@remix-run/node"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react"
import {AppProvider, ThemeProvider} from "context"
import tailwindStyles from "styles/global.css"
import {createImageUrl} from "utils/cloudinary"

import pkg from "../package.json"

export const meta: MetaFunction = () => {
    const meta: MetaDescriptor = {
        "title": "🏠 my home on the web",
        "keywords": pkg.keywords.join(","),
        "charset": "utf-8",
        "viewport": "width=device-width,initial-scale=1",
        "og:url": "https://bradgarropy.com",
        "og:type": "website",
        "og:title": "🏠 my home on the web",
        "og:image": createImageUrl("/social/facebook.png"),
        "twitter:card": "summary",
        "twitter:site": "@bradgarropy",
        "twitter:title": "🏠 my home on the web",
        "twitter:image": createImageUrl("/social/twitter.png"),
    }

    return meta
}

export const links: LinksFunction = () => {
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
            href: createImageUrl("/site/favicon.ico"),
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
