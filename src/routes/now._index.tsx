import type {MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Now from "~/components/Now"
import {getLatestNow, getNewerNow, getOlderNow} from "~/utils/now"

export const loader = async () => {
    const latestNow = await getLatestNow()
    const newerNow = await getNewerNow(latestNow)
    const olderNow = await getOlderNow(latestNow)

    return json({latestNow, newerNow, olderNow})
}

export const meta: MetaFunction = () => [
    {
        title: "🧭 now",
    },
]

const NowRoute = () => {
    const {latestNow, newerNow, olderNow} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Now now={latestNow} newer={newerNow} older={olderNow} />
        </Layout>
    )
}

export default NowRoute
