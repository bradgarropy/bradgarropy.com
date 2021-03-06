import Link from "@bradgarropy/gatsby-link"
import {
    faDiscord,
    faGithub,
    faInstagram,
    faTwitch,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import styled from "styled-components"

const FontAwesomeIconWrapper = styled(FontAwesomeIcon)`
    font-size: 2.5rem;
    color: var(--text);

    :hover {
        color: var(--primary);
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
            <FontAwesomeIconWrapper icon={icon} />
        </Link>
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
