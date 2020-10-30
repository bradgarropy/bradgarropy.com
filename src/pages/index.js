import Hero from "components/Hero"
import Layout from "components/Layout"
import {graphql, useStaticQuery} from "gatsby"
import SEO from "@bradgarropy/gatsby-plugin-seo"

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
            <SEO title={description} description="" />

            <Hero />
        </Layout>
    )
}

export default IndexPage
