import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import bg from "../../static/bg.png"
import Navigation from "./Navigation"
import Footer from "./Footer"
import "../scss/Layout.scss"
import "../scss/main.scss"

const Layout = ({children}) => {
    return (
        <div>
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
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
