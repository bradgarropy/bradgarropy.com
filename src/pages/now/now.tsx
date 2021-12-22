import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Now from "components/Now"
import {GetStaticProps} from "next"
import {FC} from "react"
import {Now as NowType} from "types/now"
import {getLatestNow, getNewerNow, getOlderNow} from "utils/now"

type NowPageProps = {
    latestNow: NowType
    newerNow: NowType
    olderNow: NowType
}

const NowPage: FC<NowPageProps> = ({latestNow, newerNow, olderNow}) => {
    return (
        <Layout>
            <SEO title="🧭 now" />
            <Now now={latestNow} newer={newerNow} older={olderNow} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const latestNow = await getLatestNow()
    const newerNow = await getNewerNow(latestNow)
    const olderNow = await getOlderNow(latestNow)

    return {
        props: {
            latestNow,
            newerNow,
            olderNow,
        },
    }
}

export default NowPage
export {getStaticProps}
