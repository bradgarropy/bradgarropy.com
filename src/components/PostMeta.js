import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const PostMetaWrapper = styled.div`
    p {
        margin: 0rem;
    }

    a {
        color: rgba(0, 0, 0, 0.8);

        &:hover {
            color: ${({theme}) => theme.colors.blue};
        }
    }
`

const PostMeta = ({date, topic}) => {
    const {name} = topic

    return (
        <PostMetaWrapper>
            <p>
                {date} in <Link to={`/topic/${name}`}>#{name}</Link>
            </p>
        </PostMetaWrapper>
    )
}

PostMeta.propTypes = {
    date: PropTypes.string.isRequired,
    topic: PropTypes.object.isRequired,
}

export default PostMeta
