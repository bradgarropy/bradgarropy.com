import SEO from "@bradgarropy/next-seo"
import Post from "components/Post"
import {FC} from "react"

const PostTemplate: FC = ({data}) => {
    const post = data.markdownRemark
    const {frontmatter} = post

    return (
        <>
            <SEO title={frontmatter.title} />

            <Post post={post} />
        </>
    )
}

export default PostTemplate
