import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const IndexPage = () => {
    return (
        <Layout>
            <Meta title="bradgarropy"/>
            <Facebook/>
            <Twitter/>

            <p>suh dude.</p>
        </Layout>
    )
}

export default IndexPage
