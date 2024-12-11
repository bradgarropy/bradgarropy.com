import type {MetaFunction} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import {useState} from "react"

import Layout from "~/components/Layout"
import PostList from "~/components/PostList"
import PostSearchBar from "~/components/PostSearchBar"
import type {PostFrontmatter} from "~/types/post"
import {getMeta} from "~/utils/meta"
import {getPosts} from "~/utils/posts"

export const loader = async () => {
    const allPosts = getPosts()
    return {allPosts}
}

export const meta: MetaFunction = () => {
    const meta = getMeta({
        title: "✍🏼 blog",
    })

    return meta
}

const BlogRoute = () => {
    const {allPosts} = useLoaderData<typeof loader>()
    const [posts, setPosts] = useState(allPosts)

    const onSearch = (filteredPosts: PostFrontmatter[]) => {
        setPosts(filteredPosts)
    }

    return (
        <Layout>
            <div>
                <PostSearchBar posts={allPosts} onSearch={onSearch} />
                <PostList posts={posts} />
            </div>
        </Layout>
    )
}

export default BlogRoute
