import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Twitter from "../components/SEO/Twitter"
import Facebook from "../components/SEO/Facebook"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    description
                }
            }
        }
    `)

    const {description} = data.site.siteMetadata

    return (
        <Layout>
            <Meta title="bradgarropy" />
            <Facebook title={description} description="" />
            <Twitter title={description} description="" />

            <Hero />
        </Layout>
    )
}

export default IndexPage
