import SEO from "@bradgarropy/gatsby-plugin-seo"
import Now from "components/Now"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

const NowTemplate = ({data, pageContext}) => {
    const {now} = data
    const {newer, older} = pageContext

    return (
        <>
            <SEO title="🧭 now" />
            <Now now={now} newer={newer} older={older} />
        </>
    )
}

NowTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
}

export const nowTemplateQuery = graphql`
    query ($date: Date!) {
        now: markdownRemark(frontmatter: {date: {eq: $date}}) {
            html
            frontmatter {
                date(formatString: "MMMM D, YYYY")
            }
        }
    }
`

export default NowTemplate
