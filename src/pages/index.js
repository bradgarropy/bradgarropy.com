import Hero from "components/Hero"
import Layout from "components/Layout"
import config from "config"

const IndexPage = () => {
    return (
        <Layout>
            {/* <SEO title={config.description} description="" /> */}
            <Hero />
        </Layout>
    )
}

export default IndexPage
