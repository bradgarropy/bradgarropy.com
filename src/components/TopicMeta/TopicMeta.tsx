import {FC} from "react"
import {Post} from "types/post"

import * as styles from "./TopicMeta.module.css"

type TopicMetaProps = Pick<Post["frontmatter"], "topic">

const TopicMeta: FC<TopicMetaProps> = ({topic}) => {
    const {name, icon} = topic

    return (
        <div className={styles.topicMeta}>
            <h1>
                {icon} {name}
            </h1>
        </div>
    )
}

export default TopicMeta
