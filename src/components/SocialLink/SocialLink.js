import PropTypes from "prop-types"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faInstagram,
    faGithub,
    faTwitter,
    faYoutube,
    faTwitch,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons"

const FontAwesomeIconWrapper = styled(FontAwesomeIcon)`
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.8);
    transition: all 300ms;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`

const SocialLink = ({platform}) => {
    let url
    let icon
    let label

    switch (platform) {
        case "instagram":
            url = "https://instagram.com/bradgarropy"
            icon = faInstagram
            label = "Instagram"
            break

        case "github":
            url = "https://github.com/bradgarropy"
            icon = faGithub
            label = "GitHub"
            break

        case "twitter":
            url = "https://twitter.com/bradgarropy"
            icon = faTwitter
            label = "Twitter"
            break

        case "youtube":
            url = "https://youtube.com/bradgarropy"
            icon = faYoutube
            label = "YouTube"
            break

        case "twitch":
            url = "https://twitch.tv/bradgarropy"
            icon = faTwitch
            label = "Twitch"
            break

        case "discord":
            url = "https://bradgarropy.com/discord"
            icon = faDiscord
            label = "Discord"
            break
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
        >
            <FontAwesomeIconWrapper icon={icon} />
        </a>
    )
}

SocialLink.propTypes = {
    platform: PropTypes.oneOf([
        "instagram",
        "github",
        "twitter",
        "youtube",
        "twitch",
        "discord",
    ]),
}

export default SocialLink
