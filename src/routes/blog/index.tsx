import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import PostList from "components/PostList"
import PostSearchBar from "components/PostSearchBar"
import type {FC} from "react"
import {useState} from "react"
import type {PostFrontmatter} from "types/post"
import {getAllPosts} from "utils/posts"

const meta: MetaFunction = () => {
    const meta: MetaDescriptor = {
        title: "✍🏼 blog",
    }

    return meta
}

const loader = () => {
    const allPosts = getAllPosts()
    return json({allPosts})
}

const BlogRoute: FC = () => {
    const {allPosts} = useLoaderData<typeof loader>()
    const [posts, setPosts] = useState(allPosts)

    const onSearch = (filteredPosts: PostFrontmatter[]) => {
        setPosts(filteredPosts)
    }

    return (
        <Layout>
            {/* <SEO title="✍🏼 blog" /> */}

            <div>
                <PostSearchBar posts={allPosts} onSearch={onSearch} />
                <PostList posts={posts} />
            </div>
        </Layout>
    )
}

export default BlogRoute
export {loader, meta}
