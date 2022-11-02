import PageLayout from "components/PageLayout"
import SocialLink from "components/SocialLink"
import {FC} from "react"
import {createImageUrl} from "utils/cloudinary"

import styles from "./Connect.module.css"

const Connect: FC = () => {
    return (
        <PageLayout>
            <div className={styles.connect}>
                <img
                    src={createImageUrl("/pages/home/profile.jpg")}
                    alt="bg"
                    className={styles.profile}
                    width="460"
                    height="460"
                />

                <div>
                    <p>Hey, thanks for talking with me!</p>
                    <p>Connect with me on the following platforms.</p>
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
        </PageLayout>
    )
}

export default Connect
