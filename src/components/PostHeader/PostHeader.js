import PostMeta from "components/PostMeta"
import PostTitle from "components/PostTitle"
import PropTypes from "prop-types"

const PostHeader = ({date, topic, title, slug}) => {
    return (
        <section>
            <PostMeta date={date} topic={topic} />
            <PostTitle title={title} slug={slug} />
        </section>
    )
}

PostHeader.propTypes = {
    date: PropTypes.string.isRequired,
    topic: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string,
}

export default PostHeader
