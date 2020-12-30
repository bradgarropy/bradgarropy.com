import LinkButton from "components/LinkButton"
import PropTypes from "prop-types"
import styled from "styled-components"
import {link} from "styles/partials"
import {formatDate} from "utils/date"

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

const Now = ({now, newer = null, older = null}) => {
    const {html, frontmatter} = now
    const date = formatDate(frontmatter.date)

    return (
        <>
            <StyledNow>
                <div className="headline">
                    <h1>🧭 now</h1>
                    <span className="date">{`${date}`}</span>
                </div>

                <div dangerouslySetInnerHTML={{__html: html}} />

                <div className="pagination">
                    <LinkButton
                        href={`/now/${newer?.frontmatter.date}`}
                        next
                        disabled={!newer}
                    >
                        👈🏼 newer
                    </LinkButton>

                    <LinkButton
                        href={`/now/${older?.frontmatter.date}`}
                        next
                        reverse
                        disabled={!older}
                    >
                        older 👉🏼
                    </LinkButton>
                </div>

                <p className="inspiration">
                    inspired by{" "}
                    <a
                        href="https://twitter.com/sivers"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        derek sivers
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://nownownow.com/about"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        nownownow
                    </a>
                </p>
            </StyledNow>
        </>
    )
}

Now.propTypes = {
    now: PropTypes.object.isRequired,
    newer: PropTypes.object,
    older: PropTypes.object,
}

export default Now
