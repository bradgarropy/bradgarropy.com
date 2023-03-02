import {Link} from "@remix-run/react"
import Icon from "components/Icon"
import type {FC} from "react"

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
    let name

    switch (platform) {
        case "instagram":
            url = "https://instagram.com/bradgarropy"
            name = "instagram"
            break

        case "github":
            url = "https://github.com/bradgarropy"
            name = "github"
            break

        case "twitter":
            url = "https://twitter.com/bradgarropy"
            name = "twitter"
            break

        case "youtube":
            url = "https://youtube.com/bradgarropy"
            name = "youtube"
            break

        case "twitch":
            url = "https://twitch.tv/bradgarropy"
            name = "twitch"
            break

        case "discord":
            url = "https://bradgarropy.com/discord"
            name = "discord"
            break
    }

    return (
        <Link to={url}>
            <Icon
                className="h-8 fill-black transition duration-300 hover:fill-purple-400 dark:fill-white hover:dark:fill-purple-400"
                name={name}
            />
        </Link>
    )
}

export default SocialLink
