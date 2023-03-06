import SEO from "@bradgarropy/next-seo"
import type {LoaderArgs} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Post from "components/Post"
import type {FC} from "react"
import {getPostBySlug} from "utils/posts"

const loader = async ({params}: LoaderArgs) => {
    // TODO: fix this
    const slug = params.slug as string
    const post = await getPostBySlug(slug)

    return {
        post,
    }
}

const PostPage: FC = () => {
    const {post} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <Post post={post} />
        </Layout>
    )
}

export default PostPage
export {loader}
