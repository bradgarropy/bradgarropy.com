const path = require("path")

const createPost = (slug, createPage) => {
    const options = {
        path: `/blog/${slug}`,
        component: path.resolve("src/templates/post.js"),
        context: {slug},
    }

    createPage(options)
}

const createTopic = (topic, createPage) => {
    const {name} = topic

    const options = {
        path: `/topic/${name}`,
        component: path.resolve("src/templates/topic.js"),
        context: {name, topic},
    }

    createPage(options)
}

const createNow = (date, createPage) => {
    const options = {
        path: `/now/${date}`,
        component: path.resolve("src/templates/now.js"),
        context: {date},
    }

    createPage(options)
}

const createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    const {data} = await graphql(`
        {
            posts: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/posts/"}}
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                            topic {
                                name
                                icon
                            }
                        }
                    }
                }
            }
        }
    `)

    const posts = data.posts.edges.map(edge => edge.node)

    posts.forEach(post => {
        const {slug, topic} = post.frontmatter

        createPost(slug, createPage)
        createTopic(topic, createPage)
    })
}

module.exports = {
    createPages,
}
