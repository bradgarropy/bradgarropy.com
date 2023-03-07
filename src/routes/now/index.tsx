import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Now from "components/Now"
import type {FC} from "react"
import {getLatestNow, getNewerNow, getOlderNow} from "utils/now"

const meta: MetaFunction = () => {
    const meta: MetaDescriptor = {
        title: "🧭 now",
    }

    return meta
}

const loader = async () => {
    const latestNow = await getLatestNow()
    const newerNow = await getNewerNow(latestNow)
    const olderNow = await getOlderNow(latestNow)

    return json({
        latestNow,
        newerNow,
        olderNow,
    })
}

const NowRoute: FC = () => {
    const {latestNow, newerNow, olderNow} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Now now={latestNow} newer={newerNow} older={olderNow} />
        </Layout>
    )
}

export default NowRoute
export {loader, meta}
