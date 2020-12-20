import PostBody from "components/PostBody"
import PostFooter from "components/PostFooter"
import PostHeader from "components/PostHeader"
import PropTypes from "prop-types"
import styled from "styled-components"

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
