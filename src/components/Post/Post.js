import PropTypes from "prop-types"
import PostBody from "components/PostBody"
import PostHeader from "components/PostHeader"
import PostFooter from "components/PostFooter"

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
