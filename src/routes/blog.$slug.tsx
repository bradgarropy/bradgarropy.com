import type {LoaderArgs} from "@remix-run/node"
import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {Response} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Post from "components/Post"
import type {FC} from "react"
import {getPostBySlug} from "utils/posts"

export const meta: MetaFunction = ({data}) => {
    const {post} = data

    const meta: MetaDescriptor = {title: post.frontmatter.title}
    return meta
}

export const loader = async ({params}: LoaderArgs) => {
    const slug = params.slug

    if (!slug) {
        throw new Response("Not found", {status: 404})
    }

    const post = await getPostBySlug(slug)
    return json({post})
}

const PostRoute: FC = () => {
    const {post} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Post post={post} />
        </Layout>
    )
}

export default PostRoute
