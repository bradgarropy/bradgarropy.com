import SEO from "@bradgarropy/next-seo"
import Contact from "components/Contact"
import Layout from "components/Layout"
import type {FC} from "react"

const ContactRoute: FC = () => {
    return (
        <Layout>
            <SEO title="👋🏼 say hi" />
            <Contact />
        </Layout>
    )
}

export default ContactRoute
