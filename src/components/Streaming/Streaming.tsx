import Link from "@bradgarropy/gatsby-link"
import {FC} from "react"

import * as styles from "./Streaming.module.css"

const Streaming: FC = () => {
    return (
        <Link to="https://twitch.tv/bradgarropy">
            <span className={styles.badge}>🎥 streaming</span>
        </Link>
    )
}

export default Streaming
