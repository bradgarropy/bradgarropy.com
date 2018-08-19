import React from "react"
import Helmet from "react-helmet"


// styles
import "../scss/Footer.scss"


const Footer = () => {

    return (

        <div className="footer">

            <Helmet>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"/>
            </Helmet>

            <a href="https://www.instagram.com/bradgarropy">
                <i className="fab fa-instagram"></i>
            </a>

            <a href="https://twitter.com/bradgarropy">
                <i className="fab fa-twitter-square"></i>
            </a>

            <a href="https://github.com/bradgarropy">
                <i className="fab fa-github"></i>
            </a>

            <a href="https://www.youtube.com/bradgarropy">
                <i className="fab fa-youtube"></i>
            </a>

        </div>

    )

}


// export
export default Footer
