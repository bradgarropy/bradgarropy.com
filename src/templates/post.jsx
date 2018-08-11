import React from "react"
import PropTypes from "prop-types"

// components
import PostMeta from "../components/PostMeta"

// styles
import "./post.css"


const Post = ({data}) => {

    const date = data.contentfulPost.date
    const topic = data.contentfulPost.topic.name
    const title = data.contentfulPost.title
    const body = data.contentfulPost.body.childMarkdownRemark.html

    return (

        <div className="post">

            <PostMeta
                date={date}
                topic={topic}
            />

            <h1>{title}</h1>

            <div
                dangerouslySetInnerHTML={{
                    __html: body,
                }}
            />

        </div>

    )

}


Post.propTypes = {
    data: PropTypes.object.isRequired,
}


export const postQuery = graphql`
    query postQuery($slug: String!) {
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
export default Post
