import React from "react"
import PropTypes from "prop-types"
import LinkButton from "../LinkButton"

const PostEdit = ({slug}) => {
    const edit = `https://github.com/bradgarropy/bradgarropy.com/edit/master/content/posts/${slug}/index.md`

    return (
        <LinkButton to={edit} reverse>
            <span role="img" aria-label="edit on github">
                💻
            </span>
            <span> edit on github</span>
        </LinkButton>
    )
}

PostEdit.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostEdit
