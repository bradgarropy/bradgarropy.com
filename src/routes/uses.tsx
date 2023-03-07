import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Uses from "components/Uses"
import type {FC} from "react"
import {getMarkdownBySlug} from "utils/markdown"

const meta: MetaFunction = () => {
    const meta: MetaDescriptor = {
        title: "💠 uses",
    }

    return meta
}

const loader = async () => {
    const uses = await getMarkdownBySlug("uses")
    return json({uses})
}

const UsesRoute: FC = () => {
    const {uses} = useLoaderData<typeof loader>()

    return (
        <Layout>
            {/* <SEO title="💠 uses" /> */}
            <Uses uses={uses} />
        </Layout>
    )
}

export default UsesRoute
export {loader, meta}
