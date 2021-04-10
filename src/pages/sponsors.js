import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from "components/Layout"
import {useSponsors} from "hooks"
import styled from "styled-components"

const SponsorsPage = () => {
    const sponsors = useSponsors()
    console.log(sponsors)

    return (
        <Layout>
            <SEO title="💜 sponsors" description="" />
            <p>sponsors</p>
        </Layout>
    )
}

export default SponsorsPage
