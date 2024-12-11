import type {MetaFunction} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Now from "~/components/Now"
import {getMeta} from "~/utils/meta"
import {getLatestNow, getNewerNow, getOlderNow} from "~/utils/now"

export const loader = async () => {
    const latestNow = await getLatestNow()
    const newerNow = await getNewerNow(latestNow)
    const olderNow = await getOlderNow(latestNow)

    return {latestNow, newerNow, olderNow}
}

export const meta: MetaFunction = () => {
    const meta = getMeta({
        title: "🧭 now",
    })

    return meta
}

const NowRoute = () => {
    const {latestNow, newerNow, olderNow} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Now now={latestNow} newer={newerNow} older={olderNow} />
        </Layout>
    )
}

export default NowRoute
