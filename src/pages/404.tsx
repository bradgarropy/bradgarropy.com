import SEO from "@bradgarropy/next-seo"
import type {GetStaticProps} from "next"
import type {FC} from "react"

import FourOhFour from "~/components/FourOhFour"
import Layout from "~/components/Layout"
import type {PostFrontmatter} from "~/types/post"
import type {Video} from "~/types/video"
import {getLatestPost} from "~/utils/posts"
import {getLatestVideos} from "~/utils/videos"

type NotFoundPageProps = {
    latestPost: PostFrontmatter
    latestVideos: Video[]
}

const NotFoundPage: FC<NotFoundPageProps> = ({latestPost, latestVideos}) => {
    return (
        <Layout>
            <SEO title="🤷🏼‍♂️ not found" />
            <FourOhFour post={latestPost} videos={latestVideos} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const latestPost = getLatestPost()
    const latestVideos = await getLatestVideos(2)

    return {
        props: {
            latestPost,
            latestVideos,
        },
    }
}

export default NotFoundPage
export {getStaticProps}
