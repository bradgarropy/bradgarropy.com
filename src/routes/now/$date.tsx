import SEO from "@bradgarropy/next-seo"
import type {LoaderArgs} from "@remix-run/node"
import {Response} from "@remix-run/node"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Now from "components/Now"
import type {FC} from "react"
import {getNewerNow, getNowByDate, getOlderNow} from "utils/now"

const loader = async ({params}: LoaderArgs) => {
    const date = params.date

    if (!date) {
        throw new Response("Not found", {status: 404})
    }

    const currentNow = await getNowByDate(date)
    const newerNow = await getNewerNow(currentNow)
    const olderNow = await getOlderNow(currentNow)

    return {
        currentNow,
        newerNow,
        olderNow,
    }
}

const NowPage: FC = () => {
    const {currentNow, newerNow, olderNow} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <SEO title="🧭 now" />
            {/* TODO: fix this */}
            <Now now={currentNow} newer={newerNow} older={olderNow} />
        </Layout>
    )
}

export default NowPage
export {loader}
