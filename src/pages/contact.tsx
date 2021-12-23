import SEO from "@bradgarropy/next-seo"
import Contact from "components/Contact"
import Layout from "components/Layout"
import {GetStaticProps} from "next"
import {FC} from "react"
import {Markdown} from "types/markdown"
import {getMarkdownBySlug} from "utils/markdown"

type ContactPageProps = {
    contact: Markdown
}

const ContactPage: FC<ContactPageProps> = ({contact}) => {
    return (
        <Layout>
            <SEO title="👋🏼 say hi" />
            <Contact contact={contact} />
        </Layout>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const contact = await getMarkdownBySlug("contact")

    return {
        props: {
            contact,
        },
    }
}

export default ContactPage
export {getStaticProps}
