import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Resume from "components/Resume"
import {FC} from "react"

const ResumePage: FC = () => {
    return (
        <Layout>
            <SEO title="👔 resume" />
            <Resume />
        </Layout>
    )
}

export default ResumePage
