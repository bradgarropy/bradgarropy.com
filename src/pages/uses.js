import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"

const UsesPage = ({data}) => {
    const {html} = data.uses

    return (
        <Layout>
            <Meta title="uses" />
            <Facebook title="💠 uses" description="" />
            <Twitter title="💠 uses" description="" />

            <div
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
