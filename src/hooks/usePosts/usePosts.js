import {graphql, useStaticQuery} from "gatsby"

const usePosts = () => {
    const query = graphql`
        {
            posts: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/posts/"}}
                sort: {fields: frontmatter___date, order: DESC}
            ) {
                nodes {
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
        }
    `

    const data = useStaticQuery(query)
    const posts = data.posts.nodes

    return posts
}

export default usePosts
