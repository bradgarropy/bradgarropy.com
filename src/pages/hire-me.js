import {graphql} from "gatsby"
import PropTypes from "prop-types"
import {link} from "styles/partials"
import styled from "styled-components"
import Layout from "components/Layout"
import SEO from "@bradgarropy/gatsby-plugin-seo"

const HireMe = styled.div`
    ${link}

    align-self: center;
    justify-self: center;
`

const HireMePage = ({data}) => {
    const {html} = data.hireMe

    return (
        <Layout>
            <SEO title="🤝 let's work together" description="" />

            <HireMe dangerouslySetInnerHTML={{__html: html}} />
        </Layout>
    )
}

HireMePage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        hireMe: markdownRemark(
            fileAbsolutePath: {regex: "/content/pages/hire-me/"}
        ) {
            html
        }
    }
`

export default HireMePage
