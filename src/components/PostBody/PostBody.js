import PropTypes from "prop-types"
import {link} from "styles/partials"
import styled from "styled-components"

const PostBodyWrapper = styled.section`
    margin: 2.25rem 0rem;

    ${link}

    .twitter-tweet {
        margin: 0 auto;
    }
`

const PostBody = ({content}) => {
    return (
        <PostBodyWrapper
            dangerouslySetInnerHTML={{
                __html: content,
            }}
        />
    )
}

PostBody.propTypes = {
    content: PropTypes.string.isRequired,
}

export default PostBody
