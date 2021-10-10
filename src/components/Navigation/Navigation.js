import {Link} from "gatsby"

import * as styles from "./Navigation.module.css"

const Navigation = () => {
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
