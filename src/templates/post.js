import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import Post from "../components/Post"

const PostTemplate = ({data}) => {
    const meta = data.site.siteMetadata
    const post = data.markdownRemark
    const {frontmatter} = post
    const {slug, title} = frontmatter
    const twitter = `https://twitter.com/search?q=${meta.url}/${slug}`

    return (
        <Layout>
            <Helmet>
                <title>{title}</title>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description" content={title}/>
                <meta
                    name="twitter:image"
                    content={`${meta.url}/twitter.webp`}
                />

                <meta property="og:url" content={`${meta.url}/blog/${slug}`}/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:description" content={title}/>
                <meta
                    property="og:image"
                    content={`${meta.url}/facebook.webp`}
                />
            </Helmet>

            <Post post={post}/>

            <hr/>
            <a href={twitter}>Discuss on Twitter</a>
        </Layout>
    )
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
}

export const postTemplateQuery = graphql`
    query($slug: String!) {
        site {
            siteMetadata {
                url
                title
                description
            }
        }
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                slug
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
