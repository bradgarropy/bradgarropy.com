import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import Post from "../components/Post"

const PostTemplate = props => {
    const post = props.data.contentfulPost
    const title = post.title

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
                    content={`${props.location.origin}/twitter.webp`}
                />

                <meta property="og:url" content={props.location.href}/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="bradgarropy"/>
                <meta property="og:description" content={title}/>
                <meta
                    property="og:image"
                    content={`${props.location.origin}/facebook.webp`}
                />
            </Helmet>

            <Post post={post}/>
        </Layout>
    )
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object,
}

export const postTemplateQuery = graphql`
    query($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
            title
            date(formatString: "MMMM D, YYYY")
            topic {
                name
            }
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`

export default PostTemplate
