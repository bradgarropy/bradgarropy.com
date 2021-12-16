import SEO from "@bradgarropy/next-seo"
import PostList from "components/PostList"
import PostSearchBar from "components/PostSearchBar"
import {usePosts} from "hooks"
import {FC, useState} from "react"

const BlogPage: FC = () => {
    const allPosts = usePosts()
    const [posts, setPosts] = useState(allPosts)

    const onSearch = filteredPosts => {
        setPosts(filteredPosts)
    }

    return (
        <>
            <SEO title="✍🏼 blog" />

            <div>
                <PostSearchBar onSearch={onSearch} />
                <PostList posts={posts} />
            </div>
        </>
    )
}

export default BlogPage
