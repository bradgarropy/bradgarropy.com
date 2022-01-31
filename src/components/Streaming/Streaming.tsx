import Link from "@bradgarropy/next-link"
import {FC} from "react"

import styles from "./Streaming.module.css"

const Streaming: FC = () => {
    return (
        <Link to="https://twitch.tv/bradgarropy">
            <span className={styles.badge}>🎥 streaming</span>
        </Link>
    )
}

export default Streaming
