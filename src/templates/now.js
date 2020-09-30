import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Now from "../components/Now"
import Layout from "../components/Layout"

const NowTemplate = ({data, pageContext}) => {
    console.log(data)
    console.log(pageContext)

    const {now} = data
    const {newer, older} = pageContext

    return (
        <Layout>
            <SEO title="🧭 now" description="" />
            <Now now={now} newer={newer} older={older} />
        </Layout>
    )
}

NowTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
}

export const nowTemplateQuery = graphql`
    query($date: Date!) {
        now: markdownRemark(frontmatter: {date: {eq: $date}}) {
            html
            frontmatter {
                date(formatString: "YYYY-MM-DD")
            }
        }
    }
`

export default NowTemplate
