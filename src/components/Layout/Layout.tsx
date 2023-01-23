import SEO from "@bradgarropy/next-seo"
import Footer from "components/Footer"
import Header from "components/Header"
import {AppProvider} from "context"
import {FC, ReactNode} from "react"
import {createImageUrl} from "utils/cloudinary"

import pkg from "../../../package.json"

type LayoutProps = {
    children?: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <AppProvider>
            <SEO
                title="🏠 my home on the web"
                keywords={pkg.keywords}
                icon={createImageUrl("/site/favicon.ico")}
                facebook={{
                    image: createImageUrl("/social/facebook.png"),
                    url: "https://bradgarropy.com",
                    type: "website",
                }}
                twitter={{
                    image: createImageUrl("/social/twitter.png"),
                    site: "@bradgarropy",
                    card: "summary",
                }}
            />

            <div className="m-auto grid min-h-screen max-w-5xl grid-rows-[auto_1fr_auto] gap-y-10">
                <Header />

                <main className="box-border grid w-full max-w-[700px] justify-self-center py-0 px-5">
                    {children}
                </main>

                <Footer />
            </div>
        </AppProvider>
    )
}

export default Layout
