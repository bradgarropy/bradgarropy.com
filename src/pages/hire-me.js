import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

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
            <Meta title="hire me" />
            <Facebook title="🤝 let's work together" description="" />
            <Twitter title="🤝 let's work together" description="" />

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
