import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import PostList from "components/PostList"
import TopicMeta from "components/TopicMeta"
import type {GetStaticPaths, GetStaticProps} from "next"
import type {FC} from "react"
import type {PostFrontmatter, Topic} from "types/post"
import {getPostsByTopic, getTopic, getTopics} from "utils/posts"

type TopicPageProps = {
    topic: Topic
    posts: PostFrontmatter[]
}

const TopicPage: FC<TopicPageProps> = ({topic, posts}) => {
    return (
        <Layout>
            <SEO title={`${topic.icon} ${topic.name}`} />

            <TopicMeta topic={topic} />
            <PostList posts={posts} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = context => {
    const name = context.params.name as Topic["name"]
    const topic = getTopic(name)
    const posts = getPostsByTopic(topic.name)

    return {
        props: {
            topic,
            posts,
        },
    }
}

const getStaticPaths: GetStaticPaths = () => {
    const topics = getTopics()

    const paths = topics.map(topic => {
        return {
            params: {
                name: topic.name,
            },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export default TopicPage
export {getStaticPaths, getStaticProps}
