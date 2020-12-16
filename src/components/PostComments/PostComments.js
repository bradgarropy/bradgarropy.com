import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import LinkButton from "components/LinkButton"

const PostComments = ({slug}) => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `)

    const {siteUrl} = data.site.siteMetadata
    const query = encodeURIComponent(`${siteUrl}/blog/${slug}`)
    const discuss = `https://twitter.com/search?q=${query}`

    return <LinkButton to={discuss}>💬 discuss on twitter</LinkButton>
}

PostComments.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostComments
