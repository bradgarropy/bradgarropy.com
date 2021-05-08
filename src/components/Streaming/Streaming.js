import Link from "@bradgarropy/gatsby-link"
import styled from "styled-components"

const Badge = styled.span`
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    letter-spacing: -0.075rem;
    font-size: 1.1rem;
    color: var(--text);
    animation: pulse 2s infinite ease-out;

    @keyframes pulse {
        0% {
            opacity: 100%;
        }

        50% {
            opacity: 20%;
        }

        100% {
            opacity: 100%;
        }
    }
`

const Streaming = () => {
    return (
        <Link to="https://twitch.tv/bradgarropy">
            <Badge>🎥 streaming</Badge>
        </Link>
    )
}

export default Streaming
