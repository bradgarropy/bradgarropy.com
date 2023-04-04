import SEO from "@bradgarropy/next-seo"
import type {GetStaticPaths, GetStaticProps} from "next"
import type {FC} from "react"

import Layout from "~/components/Layout"
import Now from "~/components/Now"
import type {Now as NowType, NowFrontmatter} from "~/types/now"
import {getAllNows, getNewerNow, getNowByDate, getOlderNow} from "~/utils/now"

type NowPageProps = {
    currentNow: NowType
    newerNow: NowType
    olderNow: NowType
}

const NowPage: FC<NowPageProps> = ({currentNow, newerNow, olderNow}) => {
    return (
        <Layout>
            <SEO title="🧭 now" />
            <Now now={currentNow} newer={newerNow} older={olderNow} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async context => {
    const date = context.params.slug as NowFrontmatter["date"]

    const currentNow = await getNowByDate(date)
    const newerNow = await getNewerNow(currentNow)
    const olderNow = await getOlderNow(currentNow)

    return {
        props: {
            currentNow,
            newerNow,
            olderNow,
        },
    }
}

const getStaticPaths: GetStaticPaths = () => {
    const nows = getAllNows()

    const paths = nows.map(now => {
        return {
            params: {
                slug: now,
            },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export default NowPage
export {getStaticPaths, getStaticProps}
