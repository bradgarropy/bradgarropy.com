import PostBody from "components/PostBody"
import PostFooter from "components/PostFooter"
import PostHeader from "components/PostHeader"
import PropTypes from "prop-types"
import styled from "styled-components"
import {formatDate} from "utils/date"

const PostWrapper = styled.article`
    overflow: auto;
`

const Post = ({post}) => {
    const {frontmatter, html} = post
    const {slug, title, topic} = frontmatter
    const date = formatDate(frontmatter.date)

    return (
        <PostWrapper>
            <PostHeader date={date} topic={topic} title={title} />
            <PostBody content={html} />
            <PostFooter slug={slug} />
        </PostWrapper>
    )
}

Post.propTypes = {
    post: PropTypes.object.isRequired,
}

export default Post
