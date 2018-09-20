const path = require("path")


exports.createPages = ({graphql, actions}) => {

    const {createPage} = actions

    return new Promise(resolve => {
        graphql(
            `{
                allContentfulPost {
                    edges {
                        node {
                            slug
                            topic {
                                name
                            }
                        }
                    }
                }
            }`
        ).then(result => {

            result.data.allContentfulPost.edges.forEach(
                edge => {

                    let options = {
                        path: `${edge.node.slug}`,
                        component: path.resolve("./src/templates/post.jsx"),
                        context: {
                            slug: edge.node.slug,
                        },
                    }

                    createPage(options)

                    options = {
                        path: `/topic/${edge.node.topic.name}`,
                        component: path.resolve("./src/templates/topic.jsx"),
                        context: {
                            topic: edge.node.topic.name,
                        },
                    }

                    createPage(options)

                }
            )

            resolve()

        })
    })
}
