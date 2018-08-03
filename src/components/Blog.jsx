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

                        <time>{post.node.date}</time>
                        <h1>
                            <Link to={`/${post.node.slug}`}>
                                {post.node.title}
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
