import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const PostBodyWrapper = styled.section`
    margin: 2.25rem 0rem;

    a:not(.anchor) {
        color: rgba(0, 0, 0, 0.8);
        box-shadow: inset 0 -2px ${({theme}) => theme.colors.primary};

        &:hover {
            box-shadow: inset 0 -25px 0 ${({theme}) => theme.colors.primary};
        }
    }

    .twitter-tweet {
        margin: 0 auto;
    }
`

const UsesPage = ({data}) => {
    const {html} = data.uses

    return (
        <Layout>
            <Meta title="uses" />
            <Facebook title="💠 uses" description="" />
            <Twitter title="💠 uses" description="" />

            <PostBodyWrapper
                dangerouslySetInnerHTML={{
                    __html: html,
                }}
            />
        </Layout>
    )
}

UsesPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const usesPageQuery = graphql`
    {
        uses: markdownRemark(
            fileAbsolutePath: {regex: "/content/uses/index.md/"}
        ) {
            html
        }
    }
`

export default UsesPage
