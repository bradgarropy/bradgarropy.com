import React from "react"
import {graphql} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import SEO from "@bradgarropy/gatsby-plugin-seo"
import Layout from "../components/Layout"

const StyledContact = styled.div`
    a:not(.anchor) {
        color: rgba(0, 0, 0, 0.8);
        box-shadow: inset 0 -2px ${({theme}) => theme.colors.primary};

        &:hover {
            box-shadow: inset 0 -25px 0 ${({theme}) => theme.colors.primary};
        }
    }

    table {
        font-size: 1.5rem;
        margin-left: 0;
    }

    td {
        padding: 0 1rem 0 0;
    }
`

const ContactPage = ({data}) => {
    const {html} = data.contact

    return (
        <Layout>
            <SEO title="👋🏼 say hi" description="" />

            <StyledContact dangerouslySetInnerHTML={{__html: html}} />
        </Layout>
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
