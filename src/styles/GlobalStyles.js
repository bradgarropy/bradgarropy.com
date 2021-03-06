import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    :root {
        /* colors */
        --black: #000000;
        --darkGrey: #aaaaaa;
        --grey: #dddddd;
        --white: #ffffff;
        --purple: #c792ea;

        /* intentions */
        --primary: var(--purple);
        --text: var(--black);
        --background: var(--white);

        /* highlighting */
        --grvsc-line-highlighted-background-color: #c792ea66;
        --grvsc-line-highlighted-border-color: var(--primary);
        --grvsc-line-highlighted-border-width: 4px;
    }

    * {
        transition: all 300ms !important;
    }

    html {
        margin: 0rem;
        padding: 0rem;
    }

    body {
        background: var(--background);
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
        color: var(--text);
        margin-top: 1.75rem;
        margin-bottom: 1.75rem;
        line-height: 1.5;
    }

    p {
        color: var(--text);
        line-height: 1.75;
        margin-top: 1.75rem;
        margin-bottom: 1.75rem;
    }

    code {
        line-height: 1.5;
    }

    code:not(.grvsc-code) {
        background: #2d2b55;
        color: #fad000;
        padding: 0.25rem 0.5rem;
        border-radius: 0.3rem;
    }

    a {
        color: var(--primary);
        text-decoration: none;

        :hover {
            color: rgba(0, 0, 0, 0.8);
        }
    }

    .anchor {
        fill: var(--text);
    }

    img {
        display: block;
        max-width: 100%;
        margin: 0rem auto;
        border-radius: 0.3rem;
    }

    blockquote {
        border-left: 3px solid var(--primary);
        font-style: italic;
        padding-left: 1rem;
    }

    ul {
        color: var(--text);
    }

    table {
        color: var(--text);
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
        background-color: var(--primary);
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
