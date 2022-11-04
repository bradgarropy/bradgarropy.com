import SocialLink from "components/SocialLink"
import {FC} from "react"
import {createImageUrl} from "utils/cloudinary"

import styles from "./Connect.module.css"

const Connect: FC = () => {
    return (
        <div className={styles.connect}>
            <img
                src={createImageUrl("/pages/home/profile.jpg")}
                alt="bg"
                className={styles.profile}
                width="460"
                height="460"
            />

            <div>
                <p>Thanks for chatting with me!</p>
                <p>Let&apos;s connect on these platforms.</p>
            </div>

            <div className={styles.socials}>
                <SocialLink platform="twitch" />
                <SocialLink platform="github" />
                <SocialLink platform="youtube" />
                <SocialLink platform="twitter" />
                <SocialLink platform="instagram" />
                <SocialLink platform="discord" />
            </div>
        </div>
    )
}

export default Connect
