import type {LoaderFunctionArgs, MetaFunction} from "@remix-run/node"
import {json} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Now from "~/components/Now"
import type {NowFrontmatter} from "~/types/now"
import {getMeta} from "~/utils/meta"
import {getNewerNow, getNowByDate, getOlderNow} from "~/utils/now"

export const loader = async ({params}: LoaderFunctionArgs) => {
    const date = params.slug as NowFrontmatter["date"]

    const currentNow = await getNowByDate(date)
    const newerNow = await getNewerNow(currentNow)
    const olderNow = await getOlderNow(currentNow)

    return json({
        currentNow,
        newerNow,
        olderNow,
    })
}

export const meta: MetaFunction = () => {
    const meta = getMeta({
        title: "🧭 now",
    })

    return meta
}

const NowRoute = () => {
    const {currentNow, newerNow, olderNow} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Now now={currentNow} newer={newerNow} older={olderNow} />
        </Layout>
    )
}

export default NowRoute
