import Layout from "components/Layout"
import Post from "components/Post"
import SEO from "components/SEO"
import {getPost, getPostsFrontmatter} from "lib/post"
import PropTypes from "prop-types"

const PostTemplate = ({post}) => {
    return (
        <Layout>
            <SEO title={post.frontmatter.title} description="" />
            <Post post={post} />
        </Layout>
    )
}

PostTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

const getStaticPaths = async () => {
    const posts = getPostsFrontmatter()

    const paths = posts.map(post => {
        const path = {params: {slug: post.slug}}
        return path
    })

    return {
        paths,
        fallback: false,
    }
}

const getStaticProps = async ({params}) => {
    const post = await getPost(params.slug)
    return {props: {post}}
}

export default PostTemplate
export {getStaticPaths, getStaticProps}
