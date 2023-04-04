import SEO from "@bradgarropy/next-seo"
import type {FC} from "react"

import FourOhFour from "~/components/FourOhFour"
import Layout from "~/components/Layout"

const NotFoundPage: FC = () => {
    return (
        <Layout>
            <SEO title="🤷🏼‍♂️ not found" />
            <FourOhFour />
        </Layout>
    )
}

export default NotFoundPage
