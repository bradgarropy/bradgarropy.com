import SEO from "@bradgarropy/next-seo"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import PostList from "components/PostList"
import PostSearchBar from "components/PostSearchBar"
import type {FC} from "react"
import {useState} from "react"
import type {PostFrontmatter} from "types/post"
import {getAllPosts} from "utils/posts"

const loader = () => {
    const allPosts = getAllPosts()

    return {
        allPosts,
    }
}

const BlogPage: FC = () => {
    const {allPosts} = useLoaderData<typeof loader>()
    const [posts, setPosts] = useState(allPosts)

    const onSearch = (filteredPosts: PostFrontmatter[]) => {
        setPosts(filteredPosts)
    }

    return (
        <Layout>
            <SEO title="✍🏼 blog" />

            <div>
                <PostSearchBar posts={allPosts} onSearch={onSearch} />
                <PostList posts={posts} />
            </div>
        </Layout>
    )
}

export default BlogPage
export {loader}
