import SEO from "@bradgarropy/next-seo"
import Resume from "components/Resume"
import {FC} from "react"

const ResumePage: FC = () => {
    return (
        <>
            <SEO title="👔 resume" />

            <Resume />
        </>
    )
}

export default ResumePage
