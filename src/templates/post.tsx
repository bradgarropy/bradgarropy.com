import SEO from "@bradgarropy/gatsby-plugin-seo"
import Post from "components/Post"
import {graphql} from "gatsby"
import {FC} from "react"

const PostTemplate: FC = ({data}) => {
    const post = data.markdownRemark
    const {frontmatter} = post

    return (
        <>
            <SEO title={frontmatter.title} />

            <Post post={post} />
        </>
    )
}

export const postTemplateQuery = graphql`
    query ($slug: String!) {
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
