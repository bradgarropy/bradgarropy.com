import type {LinksFunction, LoaderFunctionArgs} from "@remix-run/node"
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react"
import classnames from "classnames"

import GoogleAnalytics from "~/components/GoogleAnalytics"
import {AppProvider} from "~/context/App"
import {ThemeProvider} from "~/context/Theme"
import styles from "~/styles/tailwind.css?url"
import {createImageUrl} from "~/utils/cloudinary"
import {getTheme} from "~/utils/session.server"

import pkg from "../package.json"

export const loader = async ({request}: LoaderFunctionArgs) => {
    const measurementId = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID || ""

    const theme = await getTheme(request)
    return {measurementId, theme}
}

export const links: LinksFunction = () => {
    const links = [
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "icon",
            href: createImageUrl("/site/favicon.png"),
        },
        {
            rel: "alternate",
            type: "application/xml",
            href: "/feed.xml",
            title: "rss feed",
        },
        {
            rel: "alternate",
            type: "application/json",
            href: "/feed.json",
            title: "json feed",
        },
    ]

    return links
}

const App = () => {
    const {measurementId, theme} = useLoaderData<typeof loader>()

    return (
        <html lang="en" className={classnames("overflow-y-scroll", theme)}>
            <head>
                <meta charSet="utf-8" />
                <meta name="keywords" content={pkg.keywords.join(",")} />

                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />

                <Meta />
                <Links />
            </head>

            <body className="bg-white transition duration-300 dark:bg-black">
                <GoogleAnalytics measurementId={measurementId} />

                <ThemeProvider defaultTheme={theme}>
                    <AppProvider>
                        <Outlet />
                    </AppProvider>
                </ThemeProvider>

                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default App
