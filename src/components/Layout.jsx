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


const IndexLayout = ({children}) => {

    return (

        <div>

            <Helmet>
                <meta name="description" content="🏠 my home on the web"/>
                <meta name="keywords" content="gatsby, react, contentful, scss, eslint, blog, portfolio"/>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:creator" content="@bradgarropy"/>
                <meta name="twitter:title" content="bradgarropy"/>
                <meta name="twitter:description" content="🏠 my home on the web"/>
                <meta name="twitter:image" content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_1:1,c_mpad,w_600,b_white/bradgarropy/bg.png"/>

                <meta property="og:url" content="https://bradgarropy.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="bradgarropy"/>
                <meta property="og:description" content="🏠 my home on the web"/>
                <meta property="og:image" content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,h_600,b_white/bradgarropy/bg.png"/>

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


IndexLayout.propTypes = {
    children: PropTypes.node,
}


// exports
export default IndexLayout
