import React from "react"
import PropTypes from "prop-types"
import PostMeta from "./PostMeta"
import PostTitle from "./PostTitle"

const PostHeader = ({date, topic, title, slug}) => {
    return (
        <div className="post-header">
            <PostMeta date={date} topic={topic}/>
            <PostTitle title={title} slug={slug}/>
        </div>
    )
}

PostHeader.propTypes = {
    date: PropTypes.string.isRequired,
    topic: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string,
}

export default PostHeader
