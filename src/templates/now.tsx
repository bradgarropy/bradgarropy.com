import SEO from "@bradgarropy/next-seo"
import Now from "components/Now"
import {FC} from "react"

const NowTemplate: FC = ({data, pageContext}) => {
    const {now} = data
    const {newer, older} = pageContext

    return (
        <>
            <SEO title="🧭 now" />
            <Now now={now} newer={newer} older={older} />
        </>
    )
}

export default NowTemplate
