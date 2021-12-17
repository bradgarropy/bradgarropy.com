import {FC} from "react"
import {Topic} from "types/post"

import styles from "./TopicMeta.module.css"

type TopicMetaProps = {
    topic: Topic
}

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
