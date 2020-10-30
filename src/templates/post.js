import {graphql} from "gatsby"
import PropTypes from "prop-types"
import Post from "components/Post"
import Layout from "components/Layout"
import SEO from "@bradgarropy/gatsby-plugin-seo"

const PostTemplate = ({data}) => {
    const post = data.markdownRemark
    const {frontmatter} = post

    return (
        <Layout>
            <SEO title={frontmatter.title} description="" />

            <Post post={post} />
        </Layout>
    )
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export const postTemplateQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                slug
                title
                date(formatString: "MMMM D, YYYY")
                topic {
                    name
                    icon
                }
            }
        }
    }
`

export default PostTemplate
