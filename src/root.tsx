import type {LinksFunction, MetaFunction} from "@remix-run/node"
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react"
import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"
import tailwindStyles from "styles/global.css"

const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "💿 remix starter",
    viewport: "width=device-width,initial-scale=1",
})

const links: LinksFunction = () => {
    const links = [
        {
            rel: "stylesheet",
            href: tailwindStyles,
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

            <body className="bg-remix-black text-white">
                <div className="grid-rows-layout grid min-h-screen">
                    <Header />

                    <div className="p-8">
                        <Outlet />
                    </div>

                    <Footer />
                </div>

                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

export default App
export {links, meta}
