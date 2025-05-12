import {useLoaderData} from "react-router"

import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import Sponsors from "~/components/Sponsors"
import {getSponsors} from "~/utils/sponsors"

export const loader = async () => {
    const sponsors = await getSponsors()
    return {sponsors}
}

const SponsorsRoute = () => {
    const {sponsors} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Meta title="💜 sponsors" />
            <Sponsors sponsors={sponsors} />
        </Layout>
    )
}

export default SponsorsRoute
