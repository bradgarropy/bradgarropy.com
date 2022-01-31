import {faBars} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useApp} from "hooks"
import {FC} from "react"

import styles from "./Hamburger.module.css"

const Hamburger: FC = () => {
    const {setOpen} = useApp()

    const onClick = () => {
        setOpen(true)
    }

    return (
        <FontAwesomeIcon
            className={styles.hamburger}
            aria-label="menu"
            icon={faBars}
            onClick={onClick}
        />
    )
}

export default Hamburger
