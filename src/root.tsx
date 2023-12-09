import type {LinksFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import type {MetaFunction} from "@remix-run/react"
import {
    Links,
    LiveReload,
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
import useTheme from "~/hooks/useTheme"
import styles from "~/styles/tailwind.css"
import {createImageUrl} from "~/utils/cloudinary"
import {getMeta} from "~/utils/meta"

import pkg from "../package.json"

export const loader = async () => {
    const measurementId =
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID || ""

    return json({measurementId})
}

export const meta: MetaFunction = () => {
    const meta = getMeta()
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
    const {theme} = useTheme()

    return (
        <html lang="en" className={classnames("overflow-y-scroll", theme)}>
            <head>
                <meta charSet="utf-8" />
                <meta name="keywords" content={pkg.keywords.join(",")} />

                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
                            const colorTheme = mediaQuery.matches ? "dark" : "light"

                            const classes = document.documentElement.classList

                            if (!classes.contains("light") && !classes.contains("dark")) {
                                classes.add(colorTheme)
                            }
                        `,
                    }}
                />

                <Meta />
                <Links />
            </head>

            <body className="bg-white transition duration-300 dark:bg-black">
                <GoogleAnalytics measurementId={measurementId} />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

const AppWithProviders = () => {
    return (
        <ThemeProvider>
            <AppProvider>
                <App />
            </AppProvider>
        </ThemeProvider>
    )
}

export default AppWithProviders
