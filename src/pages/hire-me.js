import Layout from "components/Layout"
import {getPage} from "lib/page"
import PropTypes from "prop-types"
import styled from "styled-components"
import {link} from "styles/partials"

const HireMe = styled.div`
    ${link}

    align-self: center;
    justify-self: center;
`

const HireMePage = ({hireMe}) => {
    return (
        <Layout>
            {/* <SEO title="🤝 let's work together" description="" /> */}
            <HireMe dangerouslySetInnerHTML={{__html: hireMe.html}} />
        </Layout>
    )
}

HireMePage.propTypes = {
    hireMe: PropTypes.object.isRequired,
}

const getStaticProps = async () => {
    const hireMe = await getPage("hire-me")
    return {props: {hireMe}}
}

export default HireMePage
export {getStaticProps}
