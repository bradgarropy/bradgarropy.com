import React from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"

// styles
import "./PostListItem.css"


const PostListItem = ({post}) => {

    return (

        <div className="post-list-item">

            <p>
                {post.node.date} in #{post.node.topic.name}
            </p>

            <h1>
                <Link to={`/${post.node.slug}`}>
                    {post.node.title.childMarkdownRemark.excerpt}
                </Link>
            </h1>

        </div>

    )

}


PostListItem.propTypes = {
    post: PropTypes.object.isRequired,
}


// export
export default PostListItem
