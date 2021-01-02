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
        color: ${({theme}) => theme.colors.primary};
        text-decoration: none;
        transition: all 300ms;

        &:hover {
            color: rgba(0, 0, 0, 0.8);
        }
    }

    img {
        display: block;
        max-width: 100%;
        margin: 0rem auto;
    }

    blockquote {
        border-left: 3px solid ${({theme}) => theme.colors.primary};
        font-style: italic;
        padding-left: 1rem;
    }

    ul {
        color: rgba(0, 0, 0, 0.8);
    }

    table {
        margin: 1.75rem auto;
    }

    th, td {
        padding: 0 2rem 0.5rem 0;
    }

    th:last-child,
    td:last-child {
        padding-right: 0;
    }

    ::selection {
        background-color: ${({theme}) => theme.colors.primary};
    }

    /* responsive iframes */
    .twitch,
    .youtube {
        overflow: hidden;
        position: relative;
        width: 100%;
        margin: 1.75rem auto;

        ::after {
            padding-top: 56.25%;
            display: block;
            content: "";
        }

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
`

export default GlobalStyles
