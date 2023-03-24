import type {
    LinkDescriptor,
    LinksFunction,
    MetaDescriptor,
    MetaFunction,
} from "@remix-run/node"
import {json} from "@remix-run/node"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
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
            rel: "icon",
            href: createImageUrl("/site/favicon.ico"),
        },
    ]

    return links
}

export const loader = () => {
    return json({gaMeasurementId: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID})
}

const App = () => {
    const {gaMeasurementId} = useLoaderData<typeof loader>()

    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>

            <body className="bg-white transition duration-300 dark:bg-black">
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
                ></script>

                <script
                    async
                    dangerouslySetInnerHTML={{
                        __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaMeasurementId}');
                `,
                    }}
                ></script>

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
