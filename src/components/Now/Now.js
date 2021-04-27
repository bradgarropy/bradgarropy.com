import Link from "@bradgarropy/gatsby-link"
import LinkButton from "components/LinkButton"
import PropTypes from "prop-types"
import styled from "styled-components"
import {link} from "styles/partials"

const Header = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
`

const Date = styled.span`
    text-transform: lowercase;
`

const Body = styled.div`
    ${link}
`

const Footer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    grid-template-areas: "next previous";
`
const Inspiration = styled.p`
    ${link}

    margin-block-start: 5rem;
    text-align: center;
    font-style: italic;
`

const Now = ({now, newer, older}) => {
    const {html, frontmatter} = now

    return (
        <>
            <Header>
                <h1>🧭 now</h1>
                <Date>{frontmatter.date}</Date>
            </Header>

            <Body dangerouslySetInnerHTML={{__html: html}} />

            <Footer>
                <LinkButton to={`/now/${newer}`} disabled={!newer}>
                    👈🏼 newer
                </LinkButton>

                <LinkButton
                    to={`/now/${older}`}
                    gatsby
                    reverse
                    disabled={!older}
                >
                    older 👉🏼
                </LinkButton>
            </Footer>

            <Inspiration>
                inspired by{" "}
                <Link to="https://twitter.com/sivers">derek sivers</Link> and{" "}
                <Link to="https://nownownow.com/about">nownownow</Link>
            </Inspiration>
        </>
    )
}

Now.propTypes = {
    now: PropTypes.object.isRequired,
    newer: PropTypes.string,
    older: PropTypes.string,
}

export default Now
