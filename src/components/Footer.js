import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

const FooterWrapper = styled.footer`
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: center;
    column-gap: 1.25rem;
    padding: 1.25rem 0rem;

    .fab {
        font-size: 2.5rem;
        color: rgba(0, 0, 0, 0.8);

        &:hover {
            color: ${({theme}) => theme.colors.blue};
        }
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
                <i className="fab fa-instagram"/>
            </a>

            <a href="https://twitter.com/bradgarropy" aria-label="Twitter">
                <i className="fab fa-twitter-square"/>
            </a>

            <a href="https://github.com/bradgarropy" aria-label="GitHub">
                <i className="fab fa-github"/>
            </a>

            <a href="https://www.youtube.com/bradgarropy" aria-label="YouTube">
                <i className="fab fa-youtube"/>
            </a>
        </FooterWrapper>
    )
}

// export
export default Footer
