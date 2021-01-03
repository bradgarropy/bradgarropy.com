import Layout from "components/Layout"
import PostList from "components/PostList"
import SEO from "components/SEO"
import TopicMeta from "components/TopicMeta"
import {getPostsByTopic, getPostsFrontmatter} from "lib/post"
import PropTypes from "prop-types"

const TopicTemplate = ({topic, posts}) => {
    return (
        <Layout>
            <SEO title={`${topic.icon} ${topic.name}`} description="" />

            <TopicMeta topic={topic} />
            <PostList posts={posts} />
        </Layout>
    )
}

TopicTemplate.propTypes = {
    topic: PropTypes.object.isRequired,
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const getStaticPaths = () => {
    const posts = getPostsFrontmatter()

    const paths = posts.map(post => {
        const path = {params: {slug: post.topic.name}}
        return path
    })

    return {
        paths,
        fallback: false,
    }
}

const getStaticProps = ({params}) => {
    const posts = getPostsByTopic(params.slug)
    const props = {props: {topic: posts[0].topic, posts}}

    return props
}

export default TopicTemplate
export {getStaticPaths, getStaticProps}
