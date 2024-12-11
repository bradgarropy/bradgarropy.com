import type {LoaderFunctionArgs, MetaFunction} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import PostList from "~/components/PostList"
import TopicMeta from "~/components/TopicMeta"
import type {Topic} from "~/types/post"
import {getMeta} from "~/utils/meta"
import {getPostsByTopic, getTopic} from "~/utils/posts"

export const loader = async ({params}: LoaderFunctionArgs) => {
    const name = params.name as Topic["name"]
    const topic = getTopic(name)
    const posts = getPostsByTopic(topic.name)

    return {topic, posts}
}

export const meta: MetaFunction<typeof loader> = ({data}) => {
    const meta = getMeta({
        title: `${data?.topic.icon} ${data?.topic.name}`,
    })

    return meta
}

const TopicRoute = () => {
    const {topic, posts} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <TopicMeta topic={topic} />
            <PostList posts={posts} />
        </Layout>
    )
}

export default TopicRoute
