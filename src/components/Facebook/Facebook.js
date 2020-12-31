import Head from "next/head"
import PropTypes from "prop-types"

const Facebook = ({
    url = "",
    type = "website",
    title = "",
    description = "",
    image = "",
}) => {
    return (
        <Head>
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    )
}

Facebook.propTypes = {
    url: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default Facebook
