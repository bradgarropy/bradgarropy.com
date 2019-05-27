import React from "react"
import styled from "styled-components"
import SocialLink from "./SocialLink"

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
            <SocialLink platform="instagram"/>
            <SocialLink platform="github"/>
            <SocialLink platform="twitter"/>
            <SocialLink platform="youtube"/>
        </FooterWrapper>
    )
}

// export
export default Footer
