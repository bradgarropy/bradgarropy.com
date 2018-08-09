import React from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"

// styles
import "./Blog.css"


const Blog = ({posts}) => {

    return (

        <div className="blog">

            {posts.map(
                post => (

                    <article
                        key={post.node.id}
                        className="blog-article"
                    >

                        <p>
                            {post.node.date} in #{post.node.topic.name}
                        </p>

                        <h1>
                            <Link to={`/${post.node.slug}`}>
                                {post.node.title.childMarkdownRemark.excerpt}
                            </Link>
                        </h1>

                    </article>

                )
            )}

        </div>

    )

}


Blog.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}


// export
export default Blog
