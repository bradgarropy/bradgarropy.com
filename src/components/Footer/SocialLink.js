import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faInstagram,
    faGithub,
    faTwitter,
    faYoutube,
    faTwitch,
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
    let label
    let icon

    switch (platform) {
        case "instagram":
            label = "Instagram"
            icon = faInstagram
            break

        case "github":
            label = "GitHub"
            icon = faGithub
            break

        case "twitter":
            label = "Twitter"
            icon = faTwitter
            break

        case "youtube":
            label = "YouTube"
            icon = faYoutube
            break

        case "twitch":
            label = "Twitch"
            icon = faTwitch
            break
    }

    return (
        <a
            href={`https://${platform}.com/bradgarropy`}
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
    ]),
}

export default SocialLink
