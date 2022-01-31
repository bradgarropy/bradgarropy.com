import SEO from "@bradgarropy/next-seo"
import FourOhFour from "components/FourOhFour"
import Layout from "components/Layout"
import {FC} from "react"

const NotFoundPage: FC = () => {
    return (
        <Layout>
            <SEO title="🤷🏼‍♂️ not found" />
            <FourOhFour />
        </Layout>
    )
}

export default NotFoundPage
