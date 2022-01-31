import Link from "@bradgarropy/next-link"
import {FC} from "react"

import styles from "./Navigation.module.css"

const Navigation: FC = () => {
    return (
        <nav className={styles.navigation}>
            <Link className={styles.link} to="/blog">
                blog
            </Link>

            <span>|</span>

            <Link className={styles.link} to="/now">
                now
            </Link>

            <span>|</span>

            <Link className={styles.link} to="/uses">
                uses
            </Link>

            <span>|</span>

            <Link className={styles.link} to="/hire-me">
                hire me
            </Link>

            <span>|</span>

            <Link className={styles.link} to="/contact">
                contact
            </Link>
        </nav>
    )
}

export default Navigation
