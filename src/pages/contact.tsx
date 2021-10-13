import SEO from "@bradgarropy/gatsby-plugin-seo"
import Contact from "components/Contact"
import {FC} from "react"

const ContactPage: FC = () => {
    return (
        <>
            <SEO title="👋🏼 say hi" />

            <Contact />
        </>
    )
}

export default ContactPage
