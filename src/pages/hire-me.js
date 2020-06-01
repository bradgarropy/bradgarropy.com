import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from "../components/Layout"

const HireMe = styled.div`
    a:not(.anchor) {
        color: rgba(0, 0, 0, 0.8);
        box-shadow: inset 0 -2px ${({theme}) => theme.colors.primary};

        &:hover {
            box-shadow: inset 0 -25px 0 ${({theme}) => theme.colors.primary};
        }
    }
`

const HireMePage = ({data}) => {
    console.log(data)
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
