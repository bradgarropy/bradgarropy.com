import type {GetStaticProps} from "next"
import type {FC} from "react"

import Home from "~/components/Home"
import Layout from "~/components/Layout"
import type {PostFrontmatter} from "~/types/post"
import type {Project} from "~/types/project"
import type {Video} from "~/types/video"
import {getLatestPosts} from "~/utils/posts"
import {getFeaturedProjects} from "~/utils/projects"
import {getLatestVideos} from "~/utils/videos"

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
