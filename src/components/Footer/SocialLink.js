import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faInstagram,
    faGithub,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const FontAwesomeIconWrapper = styled(FontAwesomeIcon)`
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.8);

    &:hover {
        color: ${({theme}) => theme.colors.blue};
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
            icon = faTwitterSquare
            break

        case "youtube":
            label = "YouTube"
            icon = faYoutube
            break
    }

    return (
        <a href={`https://${platform}.com/bradgarropy`} aria-label={label}>
            <FontAwesomeIconWrapper icon={icon}/>
        </a>
    )
}

SocialLink.propTypes = {
    platform: PropTypes.oneOf(["instagram", "github", "twitter", "youtube"]),
}

export default SocialLink
