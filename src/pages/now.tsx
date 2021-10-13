import SEO from "@bradgarropy/gatsby-plugin-seo"
import Now from "components/Now"
import {graphql} from "gatsby"
import useNow from "hooks/useNow"
import {FC} from "react"

const NowPage: FC = () => {
    const now = useNow()

    return (
        <>
            <SEO title="🧭 now" />

            <Now now={now} newer={now.previous} older={now.next} />
        </>
    )
}

export const query = graphql`
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

export default NowPage
