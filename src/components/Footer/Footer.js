import SocialLink from "components/SocialLink"
import styled from "styled-components"

const FooterWrapper = styled.footer`
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    column-gap: 1.25rem;
    padding: 3rem 0rem 5rem 0rem;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <SocialLink platform="twitch" />
            <SocialLink platform="github" />
            <SocialLink platform="youtube" />
            <SocialLink platform="twitter" />
            <SocialLink platform="instagram" />
            <SocialLink platform="discord" />
        </FooterWrapper>
    )
}

export default Footer
