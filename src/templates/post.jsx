import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

// components
import Post from "../components/Post"


const PostTemplate = ({data}) => {

    const post = data.contentfulPost
    const title = post.title

    return (

        <div>

            <Helmet>
                <title>{title}</title>
            </Helmet>

            <Post post={post}/>

        </div>

    )

}


PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}


export const postTemplateQuery = graphql`
    query postTemplateQuery($slug: String!) {
        contentfulPost(
            slug: {
                eq: $slug
            }
        ) {
            title
            date(formatString: "MMMM D, YYYY")
            topic {
                name
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`


// export
export default PostTemplate
