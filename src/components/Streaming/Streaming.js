import Link from "@bradgarropy/gatsby-link"

import * as styles from "./Streaming.module.css"

const Streaming = () => {
    return (
        <Link to="https://twitch.tv/bradgarropy">
            <span className={styles.badge}>🎥 streaming</span>
        </Link>
    )
}

export default Streaming
