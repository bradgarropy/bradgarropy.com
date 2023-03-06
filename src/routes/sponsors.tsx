import SEO from "@bradgarropy/next-seo"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Sponsors from "components/Sponsors"
import type {FC} from "react"
import {getSponsors} from "utils/sponsors"

const loader = async () => {
    const sponsors = await getSponsors()
    return json({sponsors})
}

const SponsorsRoute: FC = () => {
    const {sponsors} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <SEO title="💜 sponsors" />
            <Sponsors sponsors={sponsors} />
        </Layout>
    )
}

export default SponsorsRoute
export {loader}
