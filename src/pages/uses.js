import "styles/fancyLinks.css"

import SEO from "@bradgarropy/gatsby-plugin-seo"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

const UsesPage = ({data}) => {
    const {html} = data.uses

    return (
        <>
            <SEO title="💠 uses" />

            <div
                className="fancyLinks"
                dangerouslySetInnerHTML={{__html: html}}
            />
        </>
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
