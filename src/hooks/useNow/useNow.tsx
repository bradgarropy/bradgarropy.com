import {graphql, useStaticQuery} from "gatsby"
import {Now} from "types/now"

const useNow = (): Now => {
    const query = graphql`
        {
            nows: allMarkdownRemark(
                filter: {fileAbsolutePath: {regex: "/content/now/"}}
                sort: {fields: frontmatter___date, order: DESC}
                limit: 2
            ) {
                edges {
                    node {
                        html
                        frontmatter {
                            date(formatString: "MMMM D, YYYY")
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
    `

    const {nows} = useStaticQuery(query)

    const now = {
        html: nows.edges[0].node.html,
        frontmatter: nows.edges[0].node.frontmatter,
        next: nows.edges[0].next?.frontmatter.date,
        previous: nows.edges[0].previous?.frontmatter.date,
    }

    return now
}

export default useNow
