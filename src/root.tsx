import type {LinksFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import type {MetaDescriptor, MetaFunction} from "@remix-run/react"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react"

import GoogleAnalytics from "~/components/GoogleAnalytics"
import {AppProvider} from "~/context/App"
import {ThemeProvider} from "~/context/Theme"
import styles from "~/styles/tailwind.css"
import {createImageUrl} from "~/utils/cloudinary"

import pkg from "../package.json"

export const loader = async () => {
    const measurementId =
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID || ""

    return json({measurementId})
}

export const meta: MetaFunction = () => {
    const meta: MetaDescriptor[] = [
        {
            title: "💿 remix starter",
        },
        {
            property: "og:url",
            content: "https://bradgarropy.com",
        },
        {
            property: "og:type",
            content: "website",
        },
        {
            property: "og:title",
            content: "🏠 my home on the web",
        },
        {
            property: "og:image",
            content: createImageUrl("/social/facebook.png"),
        },
        {
            property: "twitter:card",
            content: "summary",
        },
        {
            property: "twitter:site",
            content: "@bradgarropy",
        },
        {
            property: "twitter:title",
            content: "🏠 my home on the web",
        },
        {
            property: "twitter:image",
            content: createImageUrl("/social/twitter.png"),
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
    const {measurementId} = useLoaderData<typeof loader>()

    return (
        <html lang="en" className="overflow-y-scroll">
            <head>
                <meta charSet="utf-8" />
                <meta name="keywords" content={pkg.keywords.join(",")} />

                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />

                <script src="/theme.js" />

                <Meta />
                <Links />
            </head>

            <body className="bg-white transition duration-300 dark:bg-black">
                <GoogleAnalytics measurementId={measurementId} />

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
