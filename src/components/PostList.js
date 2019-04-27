import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import PostHeader from "./PostHeader"

const PostListWrapper = styled.div`
    display: grid;
    row-gap: 2.25rem;
`

const PostList = ({posts}) => {
    return (
        <PostListWrapper>
            {posts.map(post => (
                <PostHeader
                    key={post.id}
                    date={post.date}
                    topic={post.topic.name}
                    title={post.title}
                    slug={post.slug}
                />
            ))}
        </PostListWrapper>
    )
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostList
