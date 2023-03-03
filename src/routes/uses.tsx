import SEO from "@bradgarropy/next-seo"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Uses from "components/Uses"
import type {FC} from "react"
import {getMarkdownBySlug} from "utils/markdown"

const loader = async () => {
    const uses = await getMarkdownBySlug("uses")
    return {uses}
}

const UsesRoute: FC = () => {
    const {uses} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <SEO title="💠 uses" />
            <Uses uses={uses} />
        </Layout>
    )
}

export default UsesRoute
export {loader}
