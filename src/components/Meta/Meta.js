import Head from "next/head"
import PropTypes from "prop-types"

const Meta = ({title = "", description = "", keywords = [], icon = ""}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(",")} />
            <link rel="icon" type="image/png" href={icon} />
        </Head>
    )
}

Meta.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    icon: PropTypes.string,
}

export default Meta
