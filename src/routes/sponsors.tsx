import type {MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Sponsors from "~/components/Sponsors"
import {getMeta} from "~/utils/meta"
import {getSponsors} from "~/utils/sponsors"

export const loader = async () => {
    const sponsors = await getSponsors()
    return json({sponsors})
}

export const meta: MetaFunction = () => {
    const meta = getMeta({
        title: "💜 sponsors",
    })

    return meta
}

const SponsorsRoute = () => {
    const {sponsors} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Sponsors sponsors={sponsors} />
        </Layout>
    )
}

export default SponsorsRoute
