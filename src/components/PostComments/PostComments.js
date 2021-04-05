import LinkButton from "components/LinkButton"
import {useMeta} from "hooks"
import PropTypes from "prop-types"

const PostComments = ({slug}) => {
    const meta = useMeta()

    const query = encodeURIComponent(`${meta.siteUrl}/blog/${slug}`)
    const discuss = `https://twitter.com/search?q=${query}`

    return <LinkButton to={discuss}>💬 discuss on twitter</LinkButton>
}

PostComments.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostComments
