import React from "react"
import PropTypes from "prop-types"

// styles
import "./post.css"


const Post = (props) => {

    return (

        <div className="post">

            <h1>{props.data.contentfulPost.title}</h1>
            <h3>{props.data.contentfulPost.date}</h3>
            <div dangerouslySetInnerHTML={{ __html: props.data.contentfulPost.body.childMarkdownRemark.html }} />

        </div>

    )

}


Post.propTypes = {

}


Post.defaultProps = {

}


export const postQuery = graphql`
    query postQuery($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
            id
            title
            slug
            date
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }`


// export
export default Post
