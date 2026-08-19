import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import Uses from "~/components/Uses"
import {getPageBySlug} from "~/utils/pages"

export const loader = async () => {
    const uses = await getPageBySlug("uses")

    if (!uses) {
        throw new Response("Not Found", {status: 404})
    }

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
