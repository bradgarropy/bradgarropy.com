import "styles/fancyLinks.css"

import Link from "@bradgarropy/gatsby-link"
import LinkButton from "components/LinkButton"
import PropTypes from "prop-types"
import styled from "styled-components"

import * as styles from "./Now.module.css"

const Inspiration = styled.p`
    margin-block-start: 5rem;
    text-align: center;
    font-style: italic;
`

const Now = ({now, newer, older}) => {
    const {html, frontmatter} = now

    return (
        <>
            <div className={styles.header}>
                <h1>🧭 now</h1>
                <span>{frontmatter.date}</span>
            </div>

            <div
                className="fancyLinks"
                dangerouslySetInnerHTML={{__html: html}}
            />

            <div className={styles.footer}>
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
            </div>

            <Inspiration className="fancyLinks">
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
