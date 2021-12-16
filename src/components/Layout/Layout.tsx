import SEO from "@bradgarropy/next-seo"
import Footer from "components/Footer"
import Header from "components/Header"
import {AppProvider} from "context"
import {FC} from "react"

import pkg from "../../../package.json"
import * as styles from "./Layout.module.css"

const Layout: FC = ({children}) => {
    return (
        <AppProvider>
            <SEO
                title="🏠 my home on the web"
                keywords={pkg.keywords}
                icon="/favicon.png"
                facebook={{
                    image: "https://bradgarropy.com/facebook.png",
                    url: "https://bradgarropy.com",
                    type: "website",
                }}
                twitter={{
                    image: "https://bradgarropy.com/twitter.png",
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
