import React from "react"
import PropTypes from "prop-types"
import PostHeader from "./PostHeader"
import "../scss/PostList.scss"

const PostList = ({posts}) => {
    return (
        <div className="post-list">
            {posts.map(post => (
                <PostHeader
                    key={post.id}
                    date={post.date}
                    topic={post.topic.name}
                    title={post.title}
                    slug={post.slug}
                />
            ))}
        </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostList
