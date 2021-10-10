import SocialLink from "components/SocialLink"

import * as styles from "./Footer.module.css"

const Footer = () => {
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
