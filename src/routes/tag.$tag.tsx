import type {LoaderFunctionArgs} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import PostList from "~/components/PostList"
import type {Tag} from "~/types/post"
import {getPostsByTag} from "~/utils/posts"

export const loader = async ({params}: LoaderFunctionArgs) => {
    const tag = params.tag as Tag
    const posts = getPostsByTag(tag)

    return {tag, posts}
}

const TagRoute = () => {
    const {tag, posts} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Meta title={`🔖 tag | ${tag}`} />

            <div className="self-start">
                <h1 className="mb-16 flex flex-col items-center gap-y-2">
                    <span className="font-heading text-4xl font-semibold">
                        posts tagged
                    </span>

                    <span className="font-heading rounded-lg bg-black px-6 py-1 text-center text-6xl font-bold text-white dark:bg-white dark:text-black">
                        {tag}
                    </span>
                </h1>

                <PostList posts={posts} />
            </div>
        </Layout>
    )
}

export default TagRoute
