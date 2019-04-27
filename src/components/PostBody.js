import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "../scss/PrismFunky.scss"

const PostBodyWrapper = styled.div`
    margin: 2.25rem 0rem;
`

const PostBody = ({content}) => {
    return (
        <PostBodyWrapper>
            <div
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
        </PostBodyWrapper>
    )
}

PostBody.propTypes = {
    content: PropTypes.string.isRequired,
}

export default PostBody
