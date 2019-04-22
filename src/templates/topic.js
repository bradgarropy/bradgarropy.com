import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import TopicMeta from "../components/TopicMeta"

const TopicTemplate = props => {
    const topic = props.data.contentfulTopic.name
    const icon = props.data.contentfulTopic.icon
    let posts = props.data.contentfulTopic.post

    posts.sort(function(a, b) {
        const first = new Date(a.date)
        const second = new Date(b.date)

        const result = second - first

        return result
    })

    return (
        <Layout>
            <Helmet>
                <title>{topic}</title>

                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:site" content="@bradgarropy"/>
                <meta name="twitter:title" content="bradgarropy"/>
                <meta name="twitter:description" content={`${icon} ${topic}`}/>
                <meta name="twitter:image" content="/static/twitter.webp"/>

                <meta property="og:url" content={props.location.href}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="bradgarropy"/>
                <meta property="og:description" content={`${icon} ${topic}`}/>
                <meta property="og:image" content="/static/facebook.webp"/>
            </Helmet>

            <TopicMeta topic={topic} icon={icon}/>

            <PostList posts={posts}/>
        </Layout>
    )
}

TopicTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object,
}

export const topicTemplateQuery = graphql`
    query($topic: String!) {
        contentfulTopic(name: {eq: $topic}) {
            name
            icon
            post {
                id
                slug
                title
                date(formatString: "MMMM D, YYYY")
                topic {
                    name
                }
            }
        }
    }
`

export default TopicTemplate
