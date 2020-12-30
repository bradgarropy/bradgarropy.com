import Layout from "components/Layout"
import {getPage} from "lib/page"
import PropTypes from "prop-types"
import styled from "styled-components"
import {link} from "styles/partials"

const Contact = styled.div`
    ${link}

    align-self: center;
    justify-self: center;

    font-size: 1rem;

    table {
        font-size: 1.5rem;
        margin-left: 0;
    }

    td {
        padding: 0 1rem 0 0;
    }
`

const ContactPage = ({contact}) => {
    return (
        <Layout>
            {/* <SEO title="👋🏼 say hi" description="" /> */}
            <Contact dangerouslySetInnerHTML={{__html: contact.html}} />
        </Layout>
    )
}

ContactPage.propTypes = {
    contact: PropTypes.object.isRequired,
}

const getStaticProps = async () => {
    const contact = await getPage("contact")
    return {props: {contact}}
}

export default ContactPage
export {getStaticProps}
