import {useLoaderData} from "react-router"

import Home from "~/components/Home"
import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import {getPosts} from "~/utils/posts"
import {getFeaturedProjects} from "~/utils/projects"
import {getLatestVideos} from "~/utils/videos"

export const loader = async () => {
    const latestPosts = getPosts(3)
    const latestVideos = await getLatestVideos(2)
    const featuredProjects = await getFeaturedProjects()

    return {
        latestPosts,
        latestVideos,
        featuredProjects,
    }
}

const IndexRoute = () => {
    const {latestPosts, latestVideos, featuredProjects} =
        useLoaderData<typeof loader>()

    return (
        <Layout>
            <Meta />
            <Home
                latestPosts={latestPosts}
                latestVideos={latestVideos}
                featuredProjects={featuredProjects}
            />
        </Layout>
    )
}

export default IndexRoute
