import PropTypes from "prop-types"
import PostHeader from "../PostHeader"
import PostBody from "../PostBody"
import PostFooter from "../PostFooter"

const Post = ({post}) => {
    const {html, frontmatter} = post
    const {slug, title, date, topic} = frontmatter

    return (
        <article>
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
