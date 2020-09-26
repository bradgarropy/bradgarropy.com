import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from "../components/Layout"

const NowTemplate = ({data}) => {
    const {html} = data.now

    return (
        <Layout>
            <SEO title="🧭 now" description="" />

            <h1>🧭 now</h1>
            <div dangerouslySetInnerHTML={{__html: html}} />
        </Layout>
    )
}

NowTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

// export const query = graphql`
//     query() {
//         now: markdownRemark(fileAbsolutePath: {regex: "/content/now/"}) {
//             html
//         }
//     }
// `

export default NowTemplate
