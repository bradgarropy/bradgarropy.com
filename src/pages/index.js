import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import Hero from "../components/Hero"

const IndexPage = () => {
    return (
        <Layout>
            <Meta title="bradgarropy"/>
            <Facebook/>
            <Twitter/>

            <Hero/>
        </Layout>
    )
}

export default IndexPage
