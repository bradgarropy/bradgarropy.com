import PostHeader from "components/PostHeader"
import PropTypes from "prop-types"

import * as styles from "./PostList.module.css"

const PostList = ({posts}) => {
    if (!posts.length) {
        return (
            <div className={styles.noPosts}>
                <span>🤷🏼‍♂️</span> no posts found
            </div>
        )
    }

    return (
        <div className={styles.postList}>
            {posts.map((post, index) => {
                const {date, topic, title, slug} = post.frontmatter

                return (
                    <PostHeader
                        key={index}
                        date={date}
                        topic={topic}
                        title={title}
                        slug={slug}
                    />
                )
            })}
        </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default PostList
