import PostHeader from "components/PostHeader"
import PropTypes from "prop-types"
import styled from "styled-components"
import {formatDate} from "utils/date"

const NoPosts = styled.div`
    font-style: italic;
    font-size: 1.25rem;

    span {
        font-style: normal;
    }
`

const PostListWrapper = styled.div`
    display: grid;
    row-gap: 2.25rem;
`

const PostList = ({posts}) => {
    if (!posts.length) {
        return (
            <NoPosts>
                <span>🤷🏼‍♂️</span> no posts found
            </NoPosts>
        )
    }

    return (
        <PostListWrapper>
            {posts.map((post, index) => {
                const {topic, title, slug} = post.frontmatter
                const date = formatDate(post.frontmatter.date)

                return (
                    <PostHeader
                        key={index}
                        date={date}
                        topic={topic}
                        title={title}
                        slug={slug}
                    />
                )
            })}
        </PostListWrapper>
    )
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostList
