import SEO from "@bradgarropy/next-seo"
import {FC, ReactNode} from "react"
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

            <main className="min-h-screen py-0 px-5 grid content-center justify-center">
                {children}
            </main>
        </>
    )
}

export default PageLayout
