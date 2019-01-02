import React from "react"
import PropTypes from "prop-types"
import PostHeader from "../components/PostHeader"
import PostBody from "../components/PostBody"

const Post = ({post}) => {
    const date = post.date
    const topic = post.topic.name
    const title = post.title
    const body = post.body.childMarkdownRemark.html

    return (
        <div className="post">
            <PostHeader date={date} topic={topic} title={title}/>

            <PostBody content={body}/>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post
