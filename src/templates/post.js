import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import Post from "../components/Post"

const PostTemplate = ({location, data}) => {
    const post = data.markdownRemark
    const {frontmatter} = post
    const {title} = frontmatter
    const twitter = `https://twitter.com/search?q=${location.href}`

    return (
        <Layout>
            <Helmet>
                <title>{title}</title>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:title" content="bradgarropy"/>
                <meta name="twitter:description" content={title}/>
                <meta
                    name="twitter:image"
                    content="https://bradgarropy.com/twitter.webp"
                />

                <meta property="og:url" content={location.href}/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="bradgarropy"/>
                <meta property="og:description" content={title}/>
                <meta
                    property="og:image"
                    content="https://bradgarropy.com/facebook.webp"
                />
            </Helmet>

            <Post post={post}/>

            <hr/>
            <a href={twitter}>Discuss on Twitter</a>
        </Layout>
    )
}

PostTemplate.propTypes = {
    location: PropTypes.object,
    data: PropTypes.object.isRequired,
}

export const postTemplateQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                topic {
                    name
                    icon
                }
            }
        }
    }
`

export default PostTemplate
