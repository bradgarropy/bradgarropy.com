import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import "../scss/PostTitle.scss"

const PostTitle = ({title, slug}) => {
    return (
        <div className="post-title">
            <h1>{slug ? <Link to={`/${slug}`}>{title}</Link> : title}</h1>
        </div>
    )
}

PostTitle.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string,
}

export default PostTitle
