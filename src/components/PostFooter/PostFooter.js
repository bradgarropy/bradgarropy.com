import PostComments from "components/PostComments"
import PostEdit from "components/PostEdit"
import PropTypes from "prop-types"

import * as styles from "./PostFooter.module.css"

const PostFooter = ({slug}) => {
    return (
        <section className={styles.postFooter}>
            <PostComments slug={slug} />
            <PostEdit slug={slug} />
        </section>
    )
}

PostFooter.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostFooter
