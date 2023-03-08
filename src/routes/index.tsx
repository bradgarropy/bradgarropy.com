import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Home from "components/Home"
import Layout from "components/Layout"
import type {FC} from "react"
import {getLatestPosts} from "utils/posts"
import {getFeaturedProjects} from "utils/projects"
import {getLatestVideos} from "utils/videos"

export const loader = async () => {
    const latestPosts = getLatestPosts()
    const latestVideos = await getLatestVideos()
    const featuredProjects = await getFeaturedProjects()

    return json({
        latestPosts,
        latestVideos,
        featuredProjects,
    })
}

const IndexRoute: FC = () => {
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
