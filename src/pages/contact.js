import SEO from "@bradgarropy/gatsby-plugin-seo"
import Contact from "components/Contact"
import {graphql} from "gatsby"
import PropTypes from "prop-types"

const ContactPage = ({data}) => {
    const {html} = data.contact

    return (
        <>
            <SEO title="👋🏼 say hi" />

            <Contact html={html} />
        </>
    )
}

ContactPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        contact: markdownRemark(
            fileAbsolutePath: {regex: "/content/pages/contact/"}
        ) {
            html
        }
    }
`

export default ContactPage
