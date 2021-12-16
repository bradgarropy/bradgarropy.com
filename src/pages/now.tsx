import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Now from "components/Now"
import useNow from "hooks/useNow"
import {FC} from "react"

const NowPage: FC = () => {
    const now = useNow()

    return (
        <Layout>
            <SEO title="🧭 now" />
            <Now now={now} newer={now.previous} older={now.next} />
        </Layout>
    )
}

export default NowPage
