const path = require("path")


exports.createPages = ({graphql, boundActionCreators}) => {

    const {createPage} = boundActionCreators

    return new Promise((resolve, reject) => {
        graphql(
            `{
                allContentfulPost {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }`
        ).then(result => {
            result.data.allContentfulPost.edges.forEach(
                edge => {

                    const options = {
                        path: `post/${edge.node.slug}`,
                        component: path.resolve("./src/templates/post.jsx"),
                        context: {
                            slug: edge.node.slug,
                        },
                    }

                    createPage(options)

                }
            )

            resolve()

        })
    })
}
