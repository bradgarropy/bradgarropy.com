import Home from "components/Home"
import Layout from "components/Layout"
import {GetStaticProps} from "next"
import {FC} from "react"
import {Podcast} from "types/podcast"
import {PostFrontmatter} from "types/post"
import {Project} from "types/project"
import {Video} from "types/video"
import {generateFeed} from "utils/feed"
import {getPodcast} from "utils/podcast"
import {getLatestPosts} from "utils/posts"
import {getFeaturedProjects} from "utils/projects"
import {getLatestVideos} from "utils/videos"

type IndexPageProps = {
    latestPosts: PostFrontmatter[]
    latestVideos: Video[]
    featuredProjects: Project[]
    podcast: Podcast
}

const IndexPage: FC<IndexPageProps> = ({
    latestPosts,
    latestVideos,
    featuredProjects,
    podcast,
}) => {
    return (
        <Layout>
            <Home
                latestPosts={latestPosts}
                latestVideos={latestVideos}
                featuredProjects={featuredProjects}
                podcast={podcast}
            />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const latestPosts = getLatestPosts()
    const latestVideos = await getLatestVideos()
    const featuredProjects = await getFeaturedProjects()
    const podcast = await getPodcast()

    generateFeed()

    return {
        props: {
            latestPosts,
            latestVideos,
            featuredProjects,
            podcast,
        },
    }
}

export default IndexPage
export {getStaticProps}
