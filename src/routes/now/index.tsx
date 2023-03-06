import SEO from "@bradgarropy/next-seo"
import {useLoaderData} from "@remix-run/react"
import Layout from "components/Layout"
import Now from "components/Now"
import type {FC} from "react"
import {getLatestNow, getNewerNow, getOlderNow} from "utils/now"

const loader = async () => {
    const latestNow = await getLatestNow()
    const newerNow = await getNewerNow(latestNow)
    const olderNow = await getOlderNow(latestNow)

    console.log(olderNow)

    return {
        latestNow,
        newerNow,
        olderNow,
    }
}

const NowRoute: FC = () => {
    const {latestNow, newerNow, olderNow} = useLoaderData<typeof loader>()

    return (
        <Layout>
            <SEO title="🧭 now" />
            {/* TODO: fix this */}
            <Now now={latestNow} newer={newerNow} older={olderNow} />
        </Layout>
    )
}

export default NowRoute
export {loader}
