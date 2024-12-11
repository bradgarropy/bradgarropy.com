import type {LoaderFunctionArgs, MetaFunction} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Newsletter from "~/components/Newsletter"
import Post from "~/components/Post"
import PostList from "~/components/PostList"
import Section from "~/components/Section"
import type {PostFrontmatter} from "~/types/post"
import {getMeta} from "~/utils/meta"
import {getPostBySlug, getRelatedPosts} from "~/utils/posts"

export const loader = async ({params}: LoaderFunctionArgs) => {
    const slug = params.slug as PostFrontmatter["slug"]
    const post = await getPostBySlug(slug)
    const relatedPosts = getRelatedPosts(post.frontmatter)

    return {post, relatedPosts}
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
    const meta = getMeta({
        title: data?.post.frontmatter.title,
    })

    return meta
}

const BlogRoute = () => {
    const {post, relatedPosts} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <div className="flex flex-col gap-y-28">
                <Post post={post} />

                <Section id="related-posts" title="related posts">
                    <PostList posts={relatedPosts} />
                </Section>

                <Section id="newsletter" title="newsletter" link="/newsletter">
                    <Newsletter />
                </Section>
            </div>
        </Layout>
    )
}

export default BlogRoute
