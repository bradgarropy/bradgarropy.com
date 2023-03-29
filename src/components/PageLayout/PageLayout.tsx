import SEO from "@bradgarropy/next-seo"
import type {FC, ReactNode} from "react"
import {createImageUrl} from "utils/cloudinary"

import pkg from "../../../package.json"

type PageLayoutProps = {
    children?: ReactNode
}

const PageLayout: FC<PageLayoutProps> = ({children}) => {
    return (
        <>
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

            <main className="grid min-h-screen content-center justify-center py-0 px-5">
                {children}
            </main>
        </>
    )
}

export default PageLayout
