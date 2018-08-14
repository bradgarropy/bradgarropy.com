import React from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"

// components
import PostMeta from "./PostMeta"

// styles
import "../styles/PostListItem.scss"


const PostListItem = ({post}) => {

    const date = post.date
    const topic = post.topic.name
    const slug = post.slug
    const title = post.title

    return (

        <div className="post-list-item">

            <PostMeta
                date={date}
                topic={topic}
            />

            <h1>
                <Link to={`/${slug}`}>
                    {title}
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
