import Layout from "components/Layout"
import FourOhFour from "components/FourOhFour"
import SEO from "@bradgarropy/gatsby-plugin-seo"

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="not found" />

            <FourOhFour />
        </Layout>
    )
}

export default NotFoundPage
