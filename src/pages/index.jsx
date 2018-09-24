import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

// components
import Layout from "../components/Layout"


const indexPage = (props) => {

    return (

        <Layout>

            <Helmet>

                <title>blog</title>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:title" content="bradgarropy"/>
                <meta name="twitter:description" content="🏠 my home on the web"/>
                <meta name="twitter:image" content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_1:1,c_mpad,w_600,b_white/bradgarropy/bg.png"/>

                <meta property="og:url" content={props.location.href}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="bradgarropy"/>
                <meta property="og:description" content="🏠 my home on the web"/>
                <meta property="og:image" content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,h_600,b_white/bradgarropy/bg.png"/>

            </Helmet>

        </Layout>

    )

}


indexPage.propTypes = {
    location: PropTypes.object,
}


// export
export default indexPage
