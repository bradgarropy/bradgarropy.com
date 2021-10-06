import PostTitle from "components/PostTitle"
import {useLatestPosts} from "hooks"

import * as styles from "./LatestPosts.module.css"

const LatestPosts = () => {
    const latestPosts = useLatestPosts()

    return (
        <div className={styles.latestPosts}>
            {latestPosts.map(latestPost => {
                const {frontmatter} = latestPost

                return (
                    <PostTitle
                        key={frontmatter.slug}
                        title={frontmatter.title}
                        slug={frontmatter.slug}
                    />
                )
            })}
        </div>
    )
}

export default LatestPosts
