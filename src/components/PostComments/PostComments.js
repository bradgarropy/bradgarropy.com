import LinkButton from "components/LinkButton"
import config from "config"
import PropTypes from "prop-types"

const PostComments = ({slug}) => {
    const query = encodeURIComponent(`${config.siteUrl}/blog/${slug}`)
    const discuss = `https://twitter.com/search?q=${query}`

    return <LinkButton href={discuss}>💬 discuss on twitter</LinkButton>
}

PostComments.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostComments
