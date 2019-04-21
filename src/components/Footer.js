import React from "react"
import Helmet from "react-helmet"
import "../scss/Footer.scss"

const Footer = () => {
    return (
        <div className="footer">
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
                />
            </Helmet>

            <a
                href="https://www.instagram.com/bradgarropy"
                aria-label="Instagram"
            >
                <i className="fab fa-instagram"/>
            </a>

            <a href="https://twitter.com/bradgarropy" aria-label="Twitter">
                <i className="fab fa-twitter-square"/>
            </a>

            <a href="https://github.com/bradgarropy" aria-label="GitHub">
                <i className="fab fa-github"/>
            </a>

            <a href="https://www.youtube.com/bradgarropy" aria-label="YouTube">
                <i className="fab fa-youtube"/>
            </a>
        </div>
    )
}

// export
export default Footer
