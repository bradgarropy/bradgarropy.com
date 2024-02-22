import {Link} from "@remix-run/react"
import type {FC} from "react"

import Icon from "~/components/Icon"

type SocialLinkProps = {
    platform:
        | "discord"
        | "github"
        | "instagram"
        | "feed"
        | "twitch"
        | "twitter"
        | "x"
        | "youtube"
}

const SocialLink: FC<SocialLinkProps> = ({platform}) => {
    let url
    let name

    switch (platform) {
        case "discord":
            url = "https://bradgarropy.com/discord"
            name = "discord"
            break

        case "github":
            url = "https://github.com/bradgarropy"
            name = "github"
            break

        case "instagram":
            url = "https://instagram.com/bradgarropy"
            name = "instagram"
            break

        case "feed":
            url = "https://bradgarropy.com/feed.json"
            name = "feed"
            break

        case "twitch":
            url = "https://twitch.tv/bradgarropy"
            name = "twitch"
            break

        case "twitter":
            url = "https://twitter.com/bradgarropy"
            name = "twitter"
            break

        case "x":
            url = "https://x.com/bradgarropy"
            name = "x"
            break

        case "youtube":
            url = "https://youtube.com/bradgarropy"
            name = "youtube"
            break
    }

    return (
        <Link to={url} reloadDocument>
            <Icon
                className="h-8 fill-black transition duration-300 hover:fill-purple-400 dark:fill-white hover:dark:fill-purple-400"
                name={name}
            />
        </Link>
    )
}

export default SocialLink
