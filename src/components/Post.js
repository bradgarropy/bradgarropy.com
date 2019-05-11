import React from "react"
import PropTypes from "prop-types"
import PostHeader from "../components/PostHeader"
import PostBody from "../components/PostBody"
import PostComments from "../components/PostComments"

const Post = ({post}) => {
    const {html, frontmatter} = post
    const {slug, title, date, topic} = frontmatter

    return (
        <div className="post">
            <PostHeader date={date} topic={topic} title={title}/>
            <PostBody content={html}/>
            <PostComments slug={slug}/>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post
