import Link from "components/Link"
import LinkButton from "components/LinkButton"
import PropTypes from "prop-types"
import styled from "styled-components"
import {link} from "styles/partials"

const StyledNow = styled.div`
    ${link}

    .headline {
        display: flex;
        align-items: baseline;
        justify-content: space-between;

        .date {
            text-transform: lowercase;
        }
    }

    .pagination {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: space-between;
        grid-template-areas: "next previous";
    }

    .inspiration {
        margin-block-start: 5rem;
        text-align: center;
        font-style: italic;
    }
`

const Now = ({now, newer, older}) => {
    const {html, frontmatter} = now

    return (
        <>
            <StyledNow>
                <div className="headline">
                    <h1>🧭 now</h1>
                    <span className="date">{`${frontmatter.date}`}</span>
                </div>

                <div dangerouslySetInnerHTML={{__html: html}} />

                <div className="pagination">
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

                <p className="inspiration">
                    inspired by{" "}
                    <Link to="https://twitter.com/sivers">derek sivers</Link>{" "}
                    and <Link to="https://nownownow.com/about">nownownow</Link>
                </p>
            </StyledNow>
        </>
    )
}

Now.propTypes = {
    now: PropTypes.object.isRequired,
    newer: PropTypes.string,
    older: PropTypes.string,
}

export default Now
