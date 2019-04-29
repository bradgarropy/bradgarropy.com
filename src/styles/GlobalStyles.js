import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        margin: 0rem;
        padding: 0rem;
    }

    body {
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-size: 16px;
        overflow-y: scroll;
        margin: 0rem;
        padding: 0rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        color: ${({theme}) => theme.colors.black};
        margin-top: 1.75rem;
        margin-bottom: 1.75rem;
        line-height: 1.5;
    }

    p {
        color: rgba(0, 0, 0, 0.8);
        line-height: 1.75;
        margin-top: 1.75rem;
        margin-bottom: 1.75rem;
    }

    a {
        color: ${({theme}) => theme.colors.blue};
        text-decoration: none;

        &:hover {
            color: ${({theme}) => theme.colors.orange};
        }
    }

    code {
        font-size: 0.9rem;
    }

    img {
        display: block;
        max-width: 100%;
        margin: 0rem auto;
    }

    blockquote {
        border-left: 3px solid ${({theme}) => theme.colors.blue};
        font-style: italic;
        padding-left: 1rem;
    }

    ul {
        color: rgba(0, 0, 0, 0.8);
    }
`

export default GlobalStyles
