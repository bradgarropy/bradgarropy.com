import SEO from "@bradgarropy/gatsby-plugin-seo"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import {link} from "styles/partials"

const Resume = styled.section`
    p:first-of-type {
        margin-top: 0;
    }

    ${link}

    li > p {
        margin: 0;
    }

    table {
        margin: 0 0 0 0;
    }
`

const ResumePage = ({data}) => {
    const {html} = data.resume

    return (
        <>
            <SEO title="👔 resume" description="" />

            <Resume dangerouslySetInnerHTML={{__html: html}} />
        </>
    )
}

ResumePage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        resume: markdownRemark(
            fileAbsolutePath: {regex: "/content/pages/resume/"}
        ) {
            html
        }
    }
`

export default ResumePage
