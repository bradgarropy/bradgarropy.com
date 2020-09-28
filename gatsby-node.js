const path = require("path")

const createPost = (post, createPage) => {
    const {slug} = post.frontmatter

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

const createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    const {data: postsData} = await graphql(`
        {
            posts: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/posts/"}}
            ) {
                nodes {
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
    `)

    // create posts
    postsData.posts.nodes
        .map(node => node)
        .forEach(post => createPost(post, createPage))

    // create topics
    postsData.posts.nodes
        .map(node => node.frontmatter.topic)
        .filter(
            (topic, index, array) =>
                array.findIndex(
                    t => t.name === topic.name && t.icon === topic.icon,
                ) === index,
        )
        .forEach(topic => createTopic(topic, createPage))
}

module.exports = {
    createPages,
}
