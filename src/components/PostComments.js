import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import styled from "styled-components"

const PostCommentsWrapper = styled.a`
    display: inline-block;
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.black};
    padding: 0.5rem 0.75rem;
    margin-top: 1rem;
    border-radius: 0.3rem;
    transition: all 300ms;
    border: 2px solid ${({theme}) => theme.colors.black};

    &:hover {
        background: ${({theme}) => theme.colors.black};
        color: ${({theme}) => theme.colors.white};
    }
`

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
        <PostCommentsWrapper href={discuss}>
            <span role="img" aria-label="Discuss on Twitter">
                💬
            </span>{" "}
            <span> Discuss on Twitter</span>
        </PostCommentsWrapper>
    )
}

PostComments.propTypes = {
    slug: PropTypes.string.isRequired,
}

export default PostComments
