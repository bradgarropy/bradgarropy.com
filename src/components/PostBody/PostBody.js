import "styles/fancyLinks.css"
import "styles/twitter.css"

import PropTypes from "prop-types"

import * as styles from "./PostBody.module.css"

const PostBody = ({content}) => {
    return (
        <section
            className={`fancyLinks ${styles.postBody}`}
            dangerouslySetInnerHTML={{
                __html: content,
            }}
        />
    )
}

PostBody.propTypes = {
    content: PropTypes.string.isRequired,
}

export default PostBody
