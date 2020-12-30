import Layout from "components/Layout"
import Post from "components/Post"
import {getPost, getPosts} from "lib/post"
import PropTypes from "prop-types"

const PostTemplate = ({post}) => {
    return (
        <Layout>
            {/* <SEO title={post.frontmatter.title} description="" /> */}
            <Post post={post} />
        </Layout>
    )
}

PostTemplate.propTypes = {
    post: PropTypes.object.isRequired,
}

const getStaticPaths = async () => {
    const posts = await getPosts()

    const paths = posts.map(post => {
        const path = {params: {slug: post.frontmatter.slug}}
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
