import type {LoaderFunctionArgs} from "react-router"
import {useLoaderData} from "react-router"

import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import PostList from "~/components/PostList"
import TopicMeta from "~/components/TopicMeta"
import type {Topic} from "~/types/post"
import {getPostsByTopic, getTopic} from "~/utils/posts"

export const loader = async ({params}: LoaderFunctionArgs) => {
    const name = params.name as Topic["name"]
    const topic = getTopic(name)
    const posts = getPostsByTopic(topic.name)

    return {topic, posts}
}

const TopicRoute = () => {
    const {topic, posts} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Meta title={`${topic.icon} ${topic.name}`} />
            <TopicMeta topic={topic} />
            <PostList posts={posts} />
        </Layout>
    )
}

export default TopicRoute
