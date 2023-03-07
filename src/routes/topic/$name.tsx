import type {LoaderArgs} from "@remix-run/node"
import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {Response} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import PostList from "components/PostList"
import TopicMeta from "components/TopicMeta"
import type {FC} from "react"
import {getPostsByTopic, getTopic} from "utils/posts"

const meta: MetaFunction = ({data}) => {
    const {topic} = data

    const meta: MetaDescriptor = {
        title: `${topic.icon} ${topic.name}`,
    }

    return meta
}

const loader = ({params}: LoaderArgs) => {
    const name = params.name

    if (!name) {
        throw new Response("Not found", {status: 404})
    }

    const topic = getTopic(name)
    const posts = getPostsByTopic(topic.name)

    return json({
        topic,
        posts,
    })
}

const TopicRoute: FC = () => {
    const {topic, posts} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <TopicMeta topic={topic} />
            <PostList posts={posts} />
        </Layout>
    )
}

export default TopicRoute
export {loader, meta}
