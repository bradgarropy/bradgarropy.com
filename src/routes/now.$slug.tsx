import type {LoaderFunctionArgs} from "react-router"
import {useLoaderData} from "@remix-run/react"

import Layout from "~/components/Layout"
import Meta from "~/components/Meta"
import Now from "~/components/Now"
import type {NowFrontmatter} from "~/types/now"
import {getNewerNow, getNowByDate, getOlderNow} from "~/utils/now"

export const loader = async ({params}: LoaderFunctionArgs) => {
    const date = params.slug as NowFrontmatter["date"]

    const currentNow = await getNowByDate(date)
    const newerNow = await getNewerNow(currentNow)
    const olderNow = await getOlderNow(currentNow)

    return {
        currentNow,
        newerNow,
        olderNow,
    }
}

const NowRoute = () => {
    const {currentNow, newerNow, olderNow} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <Meta title="🧭 now" />
            <Now now={currentNow} newer={newerNow} older={olderNow} />
        </Layout>
    )
}

export default NowRoute
