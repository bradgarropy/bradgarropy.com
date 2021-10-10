import PropTypes from "prop-types"

import * as styles from "./TopicMeta.module.css"

const TopicMeta = ({topic}) => {
    const {name, icon} = topic

    return (
        <div className={styles.topicMeta}>
            <h1>
                {icon} {name}
            </h1>
        </div>
    )
}

TopicMeta.propTypes = {
    topic: PropTypes.object.isRequired,
}

export default TopicMeta
