import React from "react"
import PropTypes from "prop-types"

// components
import PostMeta from "./PostMeta"
import PostTitle from "./PostTitle"

// styles
import "../scss/PostHeader.scss"


const PostHeader = ({date, topic, title, slug}) => {

    return (

        <div className="post-header">

            <PostMeta
                date={date}
                topic={topic}
            />

            <PostTitle
                title={title}
                slug={slug}
            />

        </div>

    )

}


PostHeader.propTypes = {
    date: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string,
}


// export
export default PostHeader
