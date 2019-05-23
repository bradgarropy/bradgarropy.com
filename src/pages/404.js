import React from "react"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import FourOhFour from "../components/FourOhFour"

const NotFoundPage = () => {
    return (
        <Layout>
            <Meta title="not found"/>
            <Facebook/>
            <Twitter/>

            <FourOhFour/>
        </Layout>
    )
}

export default NotFoundPage
