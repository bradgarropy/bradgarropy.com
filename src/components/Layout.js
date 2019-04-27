import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import {ThemeProvider} from "styled-components"
import bg from "../../static/bg.png"
import Navigation from "./Navigation"
import Footer from "./Footer"
import GlobalStyles from "../styles/GlobalStyles"
import theme from "../styles/theme"
import "../scss/Layout.scss"
import "../scss/main.scss"

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

                <div className="container">
                    <Navigation/>
                    <div className="content">{children}</div>
                    <Footer/>
                </div>
            </>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
