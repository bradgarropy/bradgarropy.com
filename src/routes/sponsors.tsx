import SEO from "@bradgarropy/next-seo"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Sponsors from "components/Sponsors"
import type {FC} from "react"
import {getSponsors} from "utils/sponsors"

const loader = async () => {
    const sponsors = await getSponsors()
    return {sponsors}
}

const SponsorsPage: FC = () => {
    const {sponsors} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <SEO title="💜 sponsors" />
            <Sponsors sponsors={sponsors} />
        </Layout>
    )
}

export default SponsorsPage
export {loader}
