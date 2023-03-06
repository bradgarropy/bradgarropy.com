import SEO from "@bradgarropy/next-seo"
import type {LoaderArgs} from "@remix-run/node"
import {Response} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Post from "components/Post"
import type {FC} from "react"
import {getPostBySlug} from "utils/posts"

const loader = async ({params}: LoaderArgs) => {
    const slug = params.slug

    if (!slug) {
        throw new Response("Not found", {status: 404})
    }

    const post = await getPostBySlug(slug)
    return {post}
}

const PostRoute: FC = () => {
    const {post} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <Post post={post} />
        </Layout>
    )
}

export default PostRoute
export {loader}
