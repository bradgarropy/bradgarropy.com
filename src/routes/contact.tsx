import Contact from "~/components/Contact"
import Layout from "~/components/Layout"
import Meta from "~/components/Meta"

const ContactRoute = () => {
    return (
        <Layout>
            <Meta title="👋🏼 say hi" />
            <Contact />
        </Layout>
    )
}

export default ContactRoute
