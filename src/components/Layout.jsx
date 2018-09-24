import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

// components
import Navigation from "./Navigation"
import Footer from "./Footer"

// favicon
import favicon from "../icons/favicon.ico"

// styles
import "../scss/Layout.scss"
import "../scss/main.scss"


const Layout = ({children}) => {

    return (

        <div>

            <Helmet>
                <meta name="description" content="🏠 my home on the web"/>
                <meta name="keywords" content="gatsby, react, contentful, scss, eslint, blog, portfolio"/>
                <link rel="icon" type="image/png" href={favicon}/>
            </Helmet>

            <div className="container">

                <Navigation/>

                <div className="content">
                    {children}
                </div>

                <Footer/>

            </div>

        </div>

    )
}


Layout.propTypes = {
    children: PropTypes.node,
}


// exports
export default Layout
