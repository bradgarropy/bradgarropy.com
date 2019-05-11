import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"

const PostComments = ({slug}) => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    url
                }
            }
        }
    `)

    const {url} = data.site.siteMetadata
    const query = encodeURIComponent(`${url}/blog/${slug}`)
    const discuss = `https://twitter.com/search?q=${query}`

    return (
        <a href={discuss}>
            <span role="img" aria-label="Discuss on Twitter">
                💬
            </span>{" "}
            Discuss on Twitter
        </a>
    )
}

PostComments.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostComments
