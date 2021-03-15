import SEO from "@bradgarropy/gatsby-plugin-seo"
import FourOhFour from "components/FourOhFour"
import Layout from "components/Layout"

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="not found" />

            <FourOhFour />
        </Layout>
    )
}

export default NotFoundPage
