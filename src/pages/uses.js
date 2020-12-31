import Layout from "components/Layout"
import SEO from "components/SEO"
import {getPage} from "lib/page"
import PropTypes from "prop-types"
import styled from "styled-components"
import {link} from "styles/partials"

const Uses = styled.div`
    ${link}
`

const UsesPage = ({uses}) => {
    return (
        <Layout>
            <SEO title="💠 uses" description="" />
            <Uses dangerouslySetInnerHTML={{__html: uses.html}} />
        </Layout>
    )
}

UsesPage.propTypes = {
    uses: PropTypes.object.isRequired,
}

const getStaticProps = async () => {
    const uses = await getPage("uses")
    return {props: {uses}}
}

export default UsesPage
export {getStaticProps}
