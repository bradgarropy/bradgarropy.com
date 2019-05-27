import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const Twitter = ({
    card = "summary",
    site = "@bradgarropy",
    title = "bradgarropy",
    description = "🏠 my home on the web",
    image = "https://bradgarropy.com/twitter.png",
}) => {
    return (
        <Helmet>
            <meta name="twitter:card" content={card}/>
            <meta name="twitter:site" content={site}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
        </Helmet>
    )
}

Twitter.propTypes = {
    card: PropTypes.string,
    site: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default Twitter
