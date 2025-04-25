import {useLoaderData} from "@remix-run/react"

import FourOhFour from "~/components/FourOhFour"
import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import {getLatestPost} from "~/utils/posts"
import {getLatestVideos} from "~/utils/videos"

export const loader = async () => {
    console.log("$")

    const latestPost = getLatestPost()
    const latestVideos = await getLatestVideos(2)

    return {
        latestPost,
        latestVideos,
    }
}

const NotFoundRoute = () => {
    const {latestPost, latestVideos} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Meta title="🤷🏼‍♂️ not found" />
            <FourOhFour post={latestPost} videos={latestVideos} />
        </Layout>
    )
}

export default NotFoundRoute
