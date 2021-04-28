import SEO from "@bradgarropy/gatsby-plugin-seo"
import PostList from "components/PostList"
import PostSearchBar from "components/PostSearchBar"
import {usePosts} from "hooks"
import {useState} from "react"
import styled from "styled-components"

const Blog = styled.div``

const BlogPage = () => {
    const allPosts = usePosts()
    const [posts, setPosts] = useState(allPosts)

    const onSearch = filteredPosts => {
        setPosts(filteredPosts)
    }

    return (
        <>
            <SEO title="✍🏼 blog" description="" />

            <Blog>
                <PostSearchBar onSearch={onSearch} />
                <PostList posts={posts} />
            </Blog>
        </>
    )
}

BlogPage.propTypes = {}

export default BlogPage
