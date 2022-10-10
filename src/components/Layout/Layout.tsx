import SEO from "@bradgarropy/next-seo"
import Footer from "components/Footer"
import Header from "components/Header"
import {AppProvider} from "context"
import {FC, ReactNode} from "react"
import {createImageUrl} from "utils/cloudinary"

import pkg from "../../../package.json"
import styles from "./Layout.module.css"

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

            <div className={styles.container}>
                <Header />
                <main className={styles.content}>{children}</main>
                <Footer />
            </div>
        </AppProvider>
    )
}

export default Layout
