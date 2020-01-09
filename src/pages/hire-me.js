import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import HireMe from "../components/HireMe"

const HireMePage = () => {
    return (
        <Layout>
            <Meta title="hire me" />
            <Facebook title="🤝 let's work together" description="" />
            <Twitter title="🤝 let's work together" description="" />

            <HireMe />
        </Layout>
    )
}

export default HireMePage
