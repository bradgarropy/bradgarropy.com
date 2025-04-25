import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import Uses from "~/components/Uses"
import {getMarkdownBySlug} from "~/utils/markdown.server"

export const loader = async () => {
    const uses = await getMarkdownBySlug("uses")
    return {uses}
}

const UsesRoute = () => {
    const {uses} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Meta title="💠 uses" />
            <Uses uses={uses} />
        </Layout>
    )
}

export default UsesRoute
