import {Link} from "gatsby"
import PropTypes from "prop-types"

import * as styles from "./PostMeta.module.css"

const PostMeta = ({date, topic}) => {
    const {name} = topic

    return (
        <div className={styles.postMeta}>
            <p>
                {date} in <Link to={`/topic/${name}`}>#{name}</Link>
            </p>
        </div>
    )
}

PostMeta.propTypes = {
    date: PropTypes.string.isRequired,
    topic: PropTypes.object.isRequired,
}

export default PostMeta
