import type {MetaFunction} from "@remix-run/node"

import Contact from "~/components/Contact"
import Layout from "~/components/Layout"
import {getMeta} from "~/utils/meta"

export const meta: MetaFunction = () => {
    const meta = getMeta({
        title: "👋🏼 say hi",
    })

    return meta
}

const ContactRoute = () => {
    return (
        <Layout>
            <Contact />
        </Layout>
    )
}

export default ContactRoute
