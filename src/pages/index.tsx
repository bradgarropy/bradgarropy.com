import Home from "components/Home"
import Layout from "components/Layout"
import {GetStaticProps} from "next"
import {FC} from "react"
import {PostFrontmatter} from "types/post"
import {Project} from "types/project"
import {Video} from "types/video"
import {getLatestPosts} from "utils/posts"
import {getFeaturedProjects} from "utils/projects"
import {getLatestVideos} from "utils/videos"

type IndexPageProps = {
    latestPosts: PostFrontmatter[]
    latestVideos: Video[]
    featuredProjects: Project[]
}

const IndexPage: FC<IndexPageProps> = ({
    latestPosts,
    latestVideos,
    featuredProjects,
}) => {
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

const getStaticProps: GetStaticProps = async () => {
    const latestPosts = getLatestPosts()
    const latestVideos = await getLatestVideos()
    const featuredProjects = await getFeaturedProjects()

    return {
        props: {
            latestPosts,
            latestVideos,
            featuredProjects,
        },
    }
}

export default IndexPage
export {getStaticProps}
