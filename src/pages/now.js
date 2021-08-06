import SEO from "@bradgarropy/gatsby-plugin-seo"
import Now from "components/Now"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

const NowPage = ({data}) => {
    const {node, next, previous} = data.nows.edges[0]

    return (
        <>
            <SEO title="🧭 now" />

            <Now
                now={node}
                newer={previous?.frontmatter.date}
                older={next?.frontmatter.date}
            />
        </>
    )
}

NowPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        nows: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/content/now/"}}
            sort: {fields: frontmatter___date, order: DESC}
            limit: 2
        ) {
            edges {
                node {
                    html
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                    }
                }
                next {
                    frontmatter {
                        date(formatString: "YYYY-MM-DD")
                    }
                }
                previous {
                    frontmatter {
                        date(formatString: "YYYY-MM-DD")
                    }
                }
            }
        }
    }
`

export default NowPage
