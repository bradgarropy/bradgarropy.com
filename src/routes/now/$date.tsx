import type {LoaderArgs} from "@remix-run/node"
import type {MetaDescriptor, MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {Response} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Now from "components/Now"
import type {FC} from "react"
import {getNewerNow, getNowByDate, getOlderNow} from "utils/now"

const meta: MetaFunction = () => {
    const meta: MetaDescriptor = {
        title: "🧭 now",
    }

    return meta
}

const loader = async ({params}: LoaderArgs) => {
    const date = params.date

    if (!date) {
        throw new Response("Not found", {status: 404})
    }

    const currentNow = await getNowByDate(date)
    const newerNow = await getNewerNow(currentNow)
    const olderNow = await getOlderNow(currentNow)

    return json({
        currentNow,
        newerNow,
        olderNow,
    })
}

const NowRoute: FC = () => {
    const {currentNow, newerNow, olderNow} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Now now={currentNow} newer={newerNow} older={olderNow} />
        </Layout>
    )
}

export default NowRoute
export {loader, meta}
