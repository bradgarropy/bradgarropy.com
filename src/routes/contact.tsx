import type {MetaFunction} from "@remix-run/node"

import Contact from "~/components/Contact"
import Layout from "~/components/Layout"

export const meta: MetaFunction = () => [
    {
        title: "👋🏼 say hi",
    },
]

const ContactRoute = () => {
    return (
        <Layout>
            <Contact />
        </Layout>
    )
}

export default ContactRoute
