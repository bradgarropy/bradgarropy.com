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

            <body className="bg-white transition duration-300 dark:bg-black">
                <div className="m-auto grid min-h-screen max-w-5xl grid-rows-[auto_1fr_auto] gap-y-10 font-text text-black transition-all dark:text-white">
                    <Header />

                    <main className="box-border grid w-full max-w-[700px] justify-self-center py-0 px-5">
                        <Outlet />
                    </main>

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
