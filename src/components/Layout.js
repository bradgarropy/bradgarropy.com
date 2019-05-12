import React from "react"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import Navigation from "./Navigation"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"
import theme from "../styles/theme"

const Container = styled.div`
    max-width: 700px;
    margin: auto;
    padding: 0rem 1rem;
`

const Content = styled.div`
    margin: 2.5rem 0rem;
`

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>

                <Container>
                    <Navigation/>
                    <Content>{children}</Content>
                    <Footer/>
                </Container>
            </>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
