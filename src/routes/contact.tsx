import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import Contact from "components/Contact"
import Layout from "components/Layout"
import type {FC} from "react"

export const meta: MetaFunction = () => {
    const meta: MetaDescriptor = {
        title: "👋🏼 say hi",
    }

    return meta
}

const ContactRoute: FC = () => {
    return (
        <Layout>
            <Contact />
        </Layout>
    )
}

export default ContactRoute
