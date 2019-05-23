import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const UsesPage = () => {
    return (
        <Layout>
            <Meta title="uses"/>
            <Facebook/>
            <Twitter/>

            <p>uses.</p>
        </Layout>
    )
}

export default UsesPage
