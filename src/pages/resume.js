import Layout from "components/Layout"
import SEO from "components/SEO"
import {getPage} from "lib/page"
import PropTypes from "prop-types"
import styled from "styled-components"
import {link} from "styles/partials"

const Resume = styled.section`
    p:first-of-type {
        margin-top: 0;
    }

    ${link}

    li > p {
        margin: 0;
    }

    table {
        margin: 0 0 0 0;
    }
`

const ResumePage = ({resume}) => {
    return (
        <Layout>
            <SEO title="👔 resume" description="" />
            <Resume dangerouslySetInnerHTML={{__html: resume.html}} />
        </Layout>
    )
}

ResumePage.propTypes = {
    resume: PropTypes.object.isRequired,
}

const getStaticProps = async () => {
    const resume = await getPage("resume")
    return {props: {resume}}
}

export default ResumePage
export {getStaticProps}
