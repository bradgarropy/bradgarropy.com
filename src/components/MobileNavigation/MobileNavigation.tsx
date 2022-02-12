import Link from "@bradgarropy/next-link"
import Hamburger from "components/Hamburger"
import Icon from "components/Icon"
import {useApp} from "hooks"
import {FC} from "react"

import styles from "./MobileNavigation.module.css"

const MobileNavigation: FC = () => {
    const {open, setOpen} = useApp()

    const onClick = () => {
        setOpen(false)
    }

    return open ? (
        <div className={styles.mobileNavigation}>
            <Icon name="close" className={styles.close} onClick={onClick} />

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
