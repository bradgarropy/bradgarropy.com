import SEO from "@bradgarropy/next-seo"
import type {GetStaticPaths, GetStaticProps} from "next"
import type {FC} from "react"

import Layout from "~/components/Layout"
import Newsletter from "~/components/Newsletter"
import Post from "~/components/Post"
import PostList from "~/components/PostList"
import Section from "~/components/Section"
import type {Post as PostType, PostFrontmatter} from "~/types/post"
import {getAllPosts, getPostBySlug, getRelatedPosts} from "~/utils/posts"

type PostPageProps = {
    post: PostType
    relatedPosts: PostFrontmatter[]
}

const PostPage: FC<PostPageProps> = ({post, relatedPosts}) => {
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />

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

const getStaticProps: GetStaticProps = async context => {
    const slug = context.params.slug as PostFrontmatter["slug"]
    const post = await getPostBySlug(slug)
    const relatedPosts = getRelatedPosts(post.frontmatter)

    return {
        props: {
            post,
            relatedPosts,
        },
    }
}

const getStaticPaths: GetStaticPaths = () => {
    const posts = getAllPosts()

    const paths = posts.map(post => {
        return {
            params: {
                slug: post.slug,
            },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export default PostPage
export {getStaticPaths, getStaticProps}
