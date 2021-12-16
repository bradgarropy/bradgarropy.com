import Home from "components/Home"
import Layout from "components/Layout"
import {GetStaticProps} from "next"
import {FC} from "react"
import {LatestPost} from "types/post"
import {getLatestPosts} from "utils/post"

type IndexPageProps = {
    latestPosts: LatestPost[]
}

const IndexPage: FC<IndexPageProps> = ({latestPosts}) => {
    return (
        <Layout>
            <Home latestPosts={latestPosts} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = () => {
    const posts = getLatestPosts()

    return {
        props: {
            posts,
        },
    }
}

export default IndexPage
export {getStaticProps}
