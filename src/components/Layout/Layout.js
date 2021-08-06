import SEO from "@bradgarropy/gatsby-plugin-seo"
import Footer from "components/Footer"
import Header from "components/Header"
import {AppProvider} from "context"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyles from "styles/GlobalStyles"

import pkg from "../../../package.json"

const Container = styled.div`
    min-height: 100vh;
    max-width: 1000px;
    margin: auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
    row-gap: 2.5rem;
`

const Content = styled.main`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    max-width: 700px;
    justify-self: center;
    padding: 0rem 1.25rem;
`

const Layout = ({children}) => {
    return (
        <AppProvider>
            <GlobalStyles />

            <SEO
                title="🏠 my home on the web"
                keywords={pkg.keywords}
                icon="/favicon.png"
                facebook={{
                    image: "/facebook.png",
                    url: "https://bradgarropy.com",
                    type: "website",
                }}
                twitter={{
                    image: "/twitter.png",
                    site: "@bradgarropy",
                    card: "summary",
                }}
            />

            <Container>
                <Header />
                <Content>{children}</Content>
                <Footer />
            </Container>
        </AppProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
