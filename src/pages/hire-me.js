import SEO from "@bradgarropy/gatsby-plugin-seo"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import {link} from "styles/partials"

const HireMe = styled.div`
    ${link}

    align-self: center;
    justify-self: center;
`

const HireMePage = ({data}) => {
    const {html} = data.hireMe

    return (
        <>
            <SEO title="🤝 let's work together" description="" />

            <HireMe dangerouslySetInnerHTML={{__html: html}} />
        </>
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
