import Home from "components/Home"
import Layout from "components/Layout"
import {GetStaticProps} from "next"
import {FC} from "react"
import {LatestPost} from "types/post"
import {Video} from "types/video"
import {getLatestPosts} from "utils/post"
import {getLatestVideos} from "utils/videos"

type IndexPageProps = {
    latestPosts: LatestPost[]
    latestVideos: Video[]
}

const IndexPage: FC<IndexPageProps> = ({latestPosts, latestVideos}) => {
    return (
        <Layout>
            <Home latestPosts={latestPosts} latestVideos={latestVideos} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const latestPosts = getLatestPosts()
    const latestVideos = await getLatestVideos()

    return {
        props: {
            latestPosts,
            latestVideos,
        },
    }
}

export default IndexPage
export {getStaticProps}
