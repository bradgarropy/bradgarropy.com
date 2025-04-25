import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import Now from "~/components/Now"
import {getLatestNow, getNewerNow, getOlderNow} from "~/utils/now"

export const loader = async () => {
    const latestNow = await getLatestNow()
    const newerNow = await getNewerNow(latestNow)
    const olderNow = await getOlderNow(latestNow)

    return {latestNow, newerNow, olderNow}
}

const NowRoute = () => {
    const {latestNow, newerNow, olderNow} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Meta title="🧭 now" />
            <Now now={latestNow} newer={newerNow} older={olderNow} />
        </Layout>
    )
}

export default NowRoute
