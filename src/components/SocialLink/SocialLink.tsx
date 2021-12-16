import Link from "@bradgarropy/next-link"
import {
    faDiscord,
    faGithub,
    faInstagram,
    faTwitch,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {FC} from "react"

import styles from "./SocialLink.module.css"

type SocialLinkProps = {
    platform:
        | "instagram"
        | "github"
        | "twitter"
        | "youtube"
        | "twitch"
        | "discord"
}

const SocialLink: FC<SocialLinkProps> = ({platform}) => {
    let url
    let icon
    let label

    switch (platform) {
        case "instagram":
            url = "https://instagram.com/bradgarropy"
            icon = faInstagram
            label = "instagram"
            break

        case "github":
            url = "https://github.com/bradgarropy"
            icon = faGithub
            label = "github"
            break

        case "twitter":
            url = "https://twitter.com/bradgarropy"
            icon = faTwitter
            label = "twitter"
            break

        case "youtube":
            url = "https://youtube.com/bradgarropy"
            icon = faYoutube
            label = "youtube"
            break

        case "twitch":
            url = "https://twitch.tv/bradgarropy"
            icon = faTwitch
            label = "twitch"
            break

        case "discord":
            url = "https://bradgarropy.com/discord"
            icon = faDiscord
            label = "discord"
            break
    }

    return (
        <Link to={url} aria-label={label}>
            <FontAwesomeIcon className={styles.icon} icon={icon} />
        </Link>
    )
}

export default SocialLink
