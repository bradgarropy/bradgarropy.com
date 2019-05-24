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

const createPages = ({graphql, actions}) => {
    const {createPage} = actions

    const promise = new Promise(async resolve => {
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

        resolve()
    })

    return promise
}

module.exports = {
    createPages,
}
