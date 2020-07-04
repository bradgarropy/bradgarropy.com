import React from "react"
import Layout from "../components/Layout"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import FourOhFour from "../components/FourOhFour"

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="not found" />

            <FourOhFour />
        </Layout>
    )
}

export default NotFoundPage
