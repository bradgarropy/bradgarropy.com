import Icon from "components/Icon"
import {useApp} from "hooks"
import {FC} from "react"

import styles from "./Hamburger.module.css"

const Hamburger: FC = () => {
    const {setOpen} = useApp()

    const onClick = () => {
        setOpen(true)
    }

    return <Icon name="menu" className={styles.hamburger} onClick={onClick} />
}

export default Hamburger
