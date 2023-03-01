import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Post from "components/Post"
import type {GetStaticPaths, GetStaticProps} from "next"
import type {FC} from "react"
import type {Post as PostType, PostFrontmatter} from "types/post"
import {getAllPosts, getPostBySlug} from "utils/posts"

type PostPageProps = {
    post: PostType
}

const PostPage: FC<PostPageProps> = ({post}) => {
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <Post post={post} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async context => {
    const slug = context.params.slug as PostFrontmatter["slug"]
    const post = await getPostBySlug(slug)

    return {
        props: {
            post,
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
