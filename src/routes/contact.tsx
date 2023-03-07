import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import Contact from "components/Contact"
import Layout from "components/Layout"
import type {FC} from "react"

const meta: MetaFunction = () => {
    const meta: MetaDescriptor = {
        title: "👋🏼 say hi",
    }

    return meta
}

const ContactRoute: FC = () => {
    return (
        <Layout>
            {/* <SEO title="👋🏼 say hi" /> */}
            <Contact />
        </Layout>
    )
}

export default ContactRoute
export {meta}
