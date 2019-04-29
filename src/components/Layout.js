import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled, {ThemeProvider} from "styled-components"
import Navigation from "./Navigation"
import Footer from "./Footer"
import bg from "../../static/bg.png"
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

                <Helmet>
                    <html lang="en"/>
                    <meta name="description" content="🏠 my home on the web"/>
                    <meta
                        name="keywords"
                        content="gatsby, react, contentful, scss, eslint, blog, portfolio"
                    />
                    <link rel="icon" type="image/png" href={bg}/>
                </Helmet>

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
