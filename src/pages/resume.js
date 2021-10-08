import SEO from "@bradgarropy/gatsby-plugin-seo"
import Resume from "components/Resume"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

const ResumePage = ({data}) => {
    const {html} = data.resume

    return (
        <>
            <SEO title="👔 resume" />

            <Resume html={html} />
        </>
    )
}

ResumePage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        resume: markdownRemark(
            fileAbsolutePath: {regex: "/content/pages/resume/"}
        ) {
            html
        }
    }
`

export default ResumePage
