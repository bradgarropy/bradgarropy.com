import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Meta from "../components/SEO/Meta"
import Facebook from "../components/SEO/Facebook"
import Twitter from "../components/SEO/Twitter"
import Post from "../components/Post/Post"

const PostTemplate = ({data}) => {
    const meta = data.site.siteMetadata
    const post = data.markdownRemark
    const {frontmatter} = post

    return (
        <Layout>
            <Meta title={frontmatter.title} />
            <Facebook
                url={`${meta.siteUrl}/blog/${frontmatter.slug}`}
                type="article"
                description={frontmatter.title}
            />
            <Twitter title={frontmatter.title} description="" />

            <Post post={post} />
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
                siteUrl
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
