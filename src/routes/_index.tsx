import type {MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import Home from "~/components/Home"
import Layout from "~/components/Layout"
import {getMeta} from "~/utils/meta"
import {getPosts} from "~/utils/posts"
import {getFeaturedProjects} from "~/utils/projects"
import {getLatestVideos} from "~/utils/videos"

export const loader = async () => {
    const latestPosts = getPosts(3)
    const latestVideos = await getLatestVideos(2)
    const featuredProjects = await getFeaturedProjects()

    return json({
        latestPosts,
        latestVideos,
        featuredProjects,
    })
}

export const meta: MetaFunction = () => {
    const meta = getMeta({title: "🏠 my home on the web"})
    return meta
}

const IndexRoute = () => {
    const {latestPosts, latestVideos, featuredProjects} =
        useLoaderData<typeof loader>()

    return (
        <Layout>
            <Home
                latestPosts={latestPosts}
                latestVideos={latestVideos}
                featuredProjects={featuredProjects}
            />
        </Layout>
    )
}

export default IndexRoute
