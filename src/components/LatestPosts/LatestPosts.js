import PostTitle from "components/PostTitle"
import {useLatestPosts} from "hooks"
import styled from "styled-components"

const LatestPostsWrapper = styled.div`
    display: grid;
    row-gap: 1.5rem;
`

const LatestPosts = () => {
    const latestPosts = useLatestPosts()

    return (
        <LatestPostsWrapper>
            {latestPosts.map(latestPost => {
                const {frontmatter} = latestPost

                return (
                    <PostTitle
                        key={frontmatter.slug}
                        title={frontmatter.title}
                        slug={frontmatter.slug}
                    />
                )
            })}
        </LatestPostsWrapper>
    )
}

export default LatestPosts
