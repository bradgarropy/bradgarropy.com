import SEO from "@bradgarropy/gatsby-plugin-seo"
import Resume from "components/Resume"

const ResumePage = () => {
    return (
        <>
            <SEO title="👔 resume" />

            <Resume />
        </>
    )
}

export default ResumePage
