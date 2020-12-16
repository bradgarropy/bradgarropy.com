import PropTypes from "prop-types"
import styled from "styled-components"
import PostBody from "components/PostBody"
import PostHeader from "components/PostHeader"
import PostFooter from "components/PostFooter"

const PostWrapper = styled.article`
    overflow: auto;
`

const Post = ({post}) => {
    const {html, frontmatter} = post
    const {slug, title, date, topic} = frontmatter

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
