import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faInstagram,
    faTwitterSquare,
    faGithub,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons"

const FooterWrapper = styled.footer`
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    column-gap: 1.25rem;
    padding: 3rem 0rem 5rem 0rem;
`

const SocialLink = styled(FontAwesomeIcon)`
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.8);

    &:hover {
        color: ${({theme}) => theme.colors.blue};
    }
`

const Footer = () => {
    return (
        <FooterWrapper>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
                />
            </Helmet>

            <a
                href="https://www.instagram.com/bradgarropy"
                aria-label="Instagram"
            >
                <SocialLink icon={faInstagram}/>
            </a>

            <a href="https://twitter.com/bradgarropy" aria-label="Twitter">
                <SocialLink icon={faTwitterSquare}/>
            </a>

            <a href="https://github.com/bradgarropy" aria-label="GitHub">
                <SocialLink icon={faGithub}/>
            </a>

            <a href="https://www.youtube.com/bradgarropy" aria-label="YouTube">
                <SocialLink icon={faYoutube}/>
            </a>
        </FooterWrapper>
    )
}

// export
export default Footer
