import Link from "@bradgarropy/gatsby-link"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Hamburger from "components/Hamburger"
import {useApp} from "hooks"
import {FC} from "react"

import * as styles from "./MobileNavigation.module.css"

const MobileNavigation: FC = () => {
    const {open, setOpen} = useApp()

    const onClick = () => {
        setOpen(false)
    }

    return open ? (
        <div className={styles.mobileNavigation}>
            <FontAwesomeIcon
                className={styles.close}
                icon={faTimes}
                onClick={onClick}
                aria-label="close"
            />

            <div className={styles.links}>
                <Link className={styles.link} to="/blog">
                    blog
                </Link>

                <Link className={styles.link} to="/now">
                    now
                </Link>

                <Link className={styles.link} to="/uses">
                    uses
                </Link>

                <Link className={styles.link} to="/hire-me">
                    hire me
                </Link>

                <Link className={styles.link} to="/contact">
                    contact
                </Link>
            </div>
        </div>
    ) : (
        <Hamburger />
    )
}

export default MobileNavigation
