import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "../../styles/PrismFunky.css"

const PostBodyWrapper = styled.section`
    margin: 2.25rem 0rem;

    a:not(.anchor) {
        color: rgba(0, 0, 0, 0.8);
        box-shadow: inset 0 -1px ${({theme}) => theme.colors.red};

        &:hover {
            box-shadow: inset 0 -25px 0 ${({theme}) => theme.colors.red};
        }
    }

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
