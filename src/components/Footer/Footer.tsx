import SocialLink from "components/SocialLink"
import {FC} from "react"

import * as styles from "./Footer.module.css"

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <SocialLink platform="twitch" />
            <SocialLink platform="github" />
            <SocialLink platform="youtube" />
            <SocialLink platform="twitter" />
            <SocialLink platform="instagram" />
            <SocialLink platform="discord" />
        </footer>
    )
}

export default Footer
