import {Link} from "gatsby"
import PropTypes from "prop-types"

import * as styles from "./PostTitle.module.css"

const PostTitle = ({title, slug}) => {
    return (
        <div className={styles.postTitle}>
            <h1>{slug ? <Link to={`/blog/${slug}`}>{title}</Link> : title}</h1>
        </div>
    )
}

PostTitle.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string,
}

export default PostTitle
