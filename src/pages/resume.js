import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from "../components/Layout"

const Resume = styled.section`
    p:first-of-type {
        margin-top: 0;
    }

    a:not(.anchor) {
        color: rgba(0, 0, 0, 0.8);
        box-shadow: inset 0 -2px ${({theme}) => theme.colors.primary};

        &:hover {
            box-shadow: inset 0 -25px 0 ${({theme}) => theme.colors.primary};
        }
    }

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
        <Layout>
            <SEO title="👔 resume" description="" />

            <Resume dangerouslySetInnerHTML={{__html: html}} />
        </Layout>
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