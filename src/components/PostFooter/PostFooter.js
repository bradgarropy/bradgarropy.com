import PropTypes from "prop-types"
import styled from "styled-components"
import PostComments from "../PostComments/PostComments"
import PostEdit from "../PostEdit/PostEdit"

const PostFooterWrapper = styled.section`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
`

const PostFooter = ({slug}) => {
    return (
        <PostFooterWrapper>
            <PostComments slug={slug} />
            <PostEdit slug={slug} />
        </PostFooterWrapper>
    )
}

PostFooter.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostFooter
