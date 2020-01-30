import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import styled from "styled-components"

const ContactLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: start;
    column-gap: 1rem;
    font-size: 1.5rem;
`

const Contact = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    siteUrl
                    title
                    email
                }
            }
        }
    `)

    const {siteUrl, title, email} = data.site.siteMetadata

    return (
        <div>
            <h1>
                <span role="img" aria-label="hi">
                    👋🏼
                </span>{" "}
                say hi
            </h1>

            <p>
                I enjoy connecting with other developers, drop me a message and
                let&apos;s talk!
                <br />
            </p>

            <p>
                Social media is great for informal chats.
                <br />
                Email works best for in depth discussions.
                <br />
                Consider my{" "}
                <a
                    href={`${siteUrl}/ama`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    AMA
                </a>{" "}
                if others can benefit from the question.
            </p>

            <ContactLinks>
                <span role="img" aria-label="email">
                    📧
                </span>
                <a
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {email}
                </a>

                <span role="img" aria-label="ama">
                    ❔
                </span>
                <a
                    href={`${siteUrl}/ama`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ask me anything
                </a>

                <span role="img" aria-label="twitter">
                    🐦
                </span>
                <a
                    href={`https://twitter.com/${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    twitter
                </a>
            </ContactLinks>
        </div>
    )
}

export default Contact
