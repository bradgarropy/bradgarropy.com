import {graphql} from "gatsby"
import PropTypes from "prop-types"
import Now from "components/Now"
import Layout from "components/Layout"
import SEO from "@bradgarropy/gatsby-plugin-seo"

const NowTemplate = ({data, pageContext}) => {
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
                date(formatString: "MMMM D, YYYY")
            }
        }
    }
`

export default NowTemplate
