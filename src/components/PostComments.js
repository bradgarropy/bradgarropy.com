import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import Button from "../styles/Button"

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
        <Button href={discuss}>
            <span role="img" aria-label="discuss on twitter">
                💬
            </span>
            <span> discuss on twitter</span>
        </Button>
    )
}

PostComments.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostComments
