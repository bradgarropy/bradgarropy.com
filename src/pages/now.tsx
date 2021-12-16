import SEO from "@bradgarropy/next-seo"
import Now from "components/Now"
import useNow from "hooks/useNow"
import {FC} from "react"

const NowPage: FC = () => {
    const now = useNow()

    return (
        <>
            <SEO title="🧭 now" />

            <Now now={now} newer={now.previous} older={now.next} />
        </>
    )
}

export default NowPage
