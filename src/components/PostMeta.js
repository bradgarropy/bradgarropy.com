import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import "../scss/PostMeta.scss"

const PostMeta = ({date, topic}) => {
    return (
        <div className="post-meta">
            <p>
                {date} in <Link to={`/topic/${topic}`}>#{topic}</Link>
            </p>
        </div>
    )
}

PostMeta.propTypes = {
    date: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
}

export default PostMeta
