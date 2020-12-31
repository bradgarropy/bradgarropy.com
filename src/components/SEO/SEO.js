import Facebook from "components/Facebook"
import Meta from "components/Meta"
import Twitter from "components/Twitter"
import config from "config"
import {useRouter} from "next/router"
import PropTypes from "prop-types"

const SEO = ({title = "", description = "", image = ""}) => {
    const {pathname} = useRouter()

    const defaultTitle = config.title
    const defaultTwitterImage = `${config.url}/twitter.png`
    const defaultFacebookImage = `${config.url}/facebook.png`

    const seoImage = `${config.url}${image}`
    const seoUrl = `${config.url}${pathname}`

    return (
        <>
            <Meta
                title={title || defaultTitle}
                description={description}
                keywords={config.keywords}
                icon={`${config.url}/favicon.png`}
            />

            <Facebook
                url={seoUrl}
                title={title || defaultTitle}
                description={description}
                image={image ? seoImage : defaultFacebookImage}
            />

            <Twitter
                site={config.twitter}
                title={title || defaultTitle}
                description={description}
                image={image ? seoImage : defaultTwitterImage}
            />
        </>
    )
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default SEO
