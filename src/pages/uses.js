import {graphql} from "gatsby"
import PropTypes from "prop-types"
import {link} from "styles/partials"
import styled from "styled-components"
import Layout from "components/Layout"
import SEO from "@bradgarropy/gatsby-plugin-seo"

const Uses = styled.div`
    ${link}
`

const UsesPage = ({data}) => {
    const {html} = data.uses

    return (
        <Layout>
            <SEO title="💠 uses" description="" />

            <Uses dangerouslySetInnerHTML={{__html: html}} />
        </Layout>
    )
}

UsesPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const usesPageQuery = graphql`
    {
        uses: markdownRemark(
            fileAbsolutePath: {regex: "/content/pages/uses/"}
        ) {
            html
        }
    }
`

export default UsesPage
