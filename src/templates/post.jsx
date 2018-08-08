import React from "react"
import PropTypes from "prop-types"

// styles
import "./post.css"


const Post = ({data}) => {

    return (

        <div className="post">

            <header>
                <time>{data.contentfulPost.date}</time>
                <h1>{data.contentfulPost.title}</h1>
            </header>

            <main>
                <div dangerouslySetInnerHTML={{ __html: data.contentfulPost.body.childMarkdownRemark.html }} />
            </main>

        </div>

    )

}


Post.propTypes = {
    data: PropTypes.object.isRequired,
}


export const postQuery = graphql`
    query postQuery($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
            date(formatString: "MMMM D, YYYY")
            title
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }`


// export
export default Post
