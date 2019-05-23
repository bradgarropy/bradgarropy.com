import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "../styles/PrismFunky.css"

const PostBodyWrapper = styled.section`
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
