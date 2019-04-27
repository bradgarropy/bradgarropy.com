import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const PostMetaWrapper = styled.div`
    p {
        margin: 0rem;
    }

    a {
        color: rgba($color: black, $alpha: 0.8);

        &:hover {
            color: ${({theme}) => theme.colors.blue};
        }
    }
`

const PostMeta = ({date, topic}) => {
    return (
        <PostMetaWrapper>
            <p>
                {date} in <Link to={`/topic/${topic}`}>#{topic}</Link>
            </p>
        </PostMetaWrapper>
    )
}

PostMeta.propTypes = {
    date: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
}

export default PostMeta
