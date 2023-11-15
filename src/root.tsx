import type {LinksFunction, MetaFunction} from "@remix-run/node"
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
import {createImageUrl} from "~/utils/cloudinary"

// import tailwindStyles from "~/styles/tailwind.css"

const meta: MetaFunction = () => [
    {charset: "utf-8"},
    {title: "💿 remix starter"},
    {viewport: "width=device-width,initial-scale=1"},
]

const links: LinksFunction = () => {
    const links = [
        // {
        //     rel: "stylesheet",
        //     href: tailwindStyles,
        // },
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
export {links, meta}
