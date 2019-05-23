import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const usesPage = () => {
    return (
        <Layout>
            <Meta title="blog"/>
            <Facebook/>
            <Twitter/>
            <p>uses.</p>
        </Layout>
    )
}

export default usesPage
