import Hero from "components/Hero"
import Layout from "components/Layout"
import SEO from "components/SEO"
import config from "config"

const IndexPage = () => {
    return (
        <Layout>
            <SEO title={config.description} description="" />
            <Hero />
        </Layout>
    )
}

export default IndexPage
