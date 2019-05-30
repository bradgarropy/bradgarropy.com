import React from "react"
import PropTypes from "prop-types"
import Button from "../../styles/Button"

const PostEdit = ({slug}) => {
    const edit = `https://github.com/bradgarropy/bradgarropy.com/edit/master/content/posts/${slug}/index.md`

    return (
        <Button href={edit}>
            <span role="img" aria-label="edit on github">
                💻
            </span>
            <span> edit on github</span>
        </Button>
    )
}

PostEdit.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostEdit
