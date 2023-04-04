import SEO from "@bradgarropy/next-seo"
import type {FC} from "react"

import Contact from "~/components/Contact"
import Layout from "~/components/Layout"

const ContactPage: FC = () => {
    return (
        <Layout>
            <SEO title="👋🏼 say hi" />
            <Contact />
        </Layout>
    )
}

export default ContactPage
