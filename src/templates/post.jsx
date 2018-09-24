import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import {graphql} from "gatsby"

// components
import Layout from "../components/Layout"
import Post from "../components/Post"


const PostTemplate = (props) => {

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
                <meta name="twitter:image" content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_1:1,c_mpad,w_600,b_white/bradgarropy/bg.png"/>

                <meta property="og:url" content={props.location.href}/>
                <meta property="og:type" content="article"/>
                <meta property="og:title" content="bradgarropy"/>
                <meta property="og:description" content={title}/>
                <meta property="og:image" content="https://res.cloudinary.com/bradgarropy/image/upload/q_auto,f_auto,ar_2:1,c_mpad,h_600,b_white/bradgarropy/bg.png"/>

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
    query ($slug: String!) {
        contentfulPost(
            slug: {
                eq: $slug
            }
        ) {
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


// export
export default PostTemplate
