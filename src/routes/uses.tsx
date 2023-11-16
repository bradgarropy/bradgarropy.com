import type {MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Uses from "~/components/Uses"
import {getMarkdownBySlug} from "~/utils/markdown"

export const loader = async () => {
    const uses = await getMarkdownBySlug("uses")
    return json({uses})
}

export const meta: MetaFunction = () => [
    {
        title: "💠 uses",
    },
]

const UsesRoute = () => {
    const {uses} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Uses uses={uses} />
        </Layout>
    )
}

export default UsesRoute
