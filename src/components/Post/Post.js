import PostBody from "components/PostBody"
import PostFooter from "components/PostFooter"
import PostHeader from "components/PostHeader"
import PropTypes from "prop-types"

import * as styles from "./Post.module.css"

const Post = ({post}) => {
    const {html, frontmatter} = post
    const {slug, title, date, topic} = frontmatter

    return (
        <article className={styles.post}>
            <PostHeader date={date} topic={topic} title={title} />
            <PostBody content={html} />
            <PostFooter slug={slug} />
        </article>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post
