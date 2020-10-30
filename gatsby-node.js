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

const createNow = (now, createPage) => {
    const {date} = now.node.frontmatter
    const older = now.next && now.next.frontmatter.date
    const newer = now.previous && now.previous.frontmatter.date

    const options = {
        path: `/now/${date}`,
        component: path.resolve("src/templates/now.js"),
        context: {
            date: new Date(date).toISOString(),
            newer,
            older,
        },
    }

    createPage(options)
}

const createPages = async ({graphql, actions}) => {
    const {createPage} = actions

    const {data} = await graphql(`
        {
            posts: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/posts/"}}
                sort: {fields: frontmatter___date, order: DESC}
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
            nows: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/now/"}}
                sort: {fields: frontmatter___date, order: DESC}
            ) {
                edges {
                    node {
                        frontmatter {
                            date(formatString: "YYYY-MM-DD")
                        }
                    }
                    next {
                        frontmatter {
                            date(formatString: "YYYY-MM-DD")
                        }
                    }
                    previous {
                        frontmatter {
                            date(formatString: "YYYY-MM-DD")
                        }
                    }
                }
            }
        }
    `)

    const {posts, nows} = data

    // create posts
    posts.nodes.map(node => node).forEach(post => createPost(post, createPage))

    // create topics
    posts.nodes
        .map(node => node.frontmatter.topic)
        .filter(
            (topic, index, array) =>
                array.findIndex(
                    t => t.name === topic.name && t.icon === topic.icon,
                ) === index,
        )
        .forEach(topic => createTopic(topic, createPage))

    // create nows
    nows.edges.forEach(now => createNow(now, createPage))
}

const onCreateWebpackConfig = ({actions}) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    })
}

module.exports = {
    createPages,
    onCreateWebpackConfig,
}
