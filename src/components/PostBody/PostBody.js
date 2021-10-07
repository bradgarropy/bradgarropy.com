import "styles/fancyLinks.css"

import PropTypes from "prop-types"
import styled from "styled-components"

const PostBodyWrapper = styled.section`
    margin: 2.25rem 0rem;

    .twitter-tweet {
        margin: 0 auto;
    }
`

const PostBody = ({content}) => {
    return (
        <PostBodyWrapper
            className="fancyLinks"
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
