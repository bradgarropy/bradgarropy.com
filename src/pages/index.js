import SEO from "@bradgarropy/gatsby-plugin-seo"
import Hero from "components/Hero"
import Layout from "components/Layout"
import {useLatestPosts, useMeta} from "hooks"

const IndexPage = () => {
    const meta = useMeta()
    const latestPosts = useLatestPosts()

    return (
        <Layout>
            <SEO title={meta.description} description="" />

            <Hero />
        </Layout>
    )
}

export default IndexPage
