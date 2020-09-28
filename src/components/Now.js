import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {Link} from "gatsby"

const StyledNow = styled.div`
    a:not(.anchor) {
        color: rgba(0, 0, 0, 0.8);
        box-shadow: inset 0 -2px ${({theme}) => theme.colors.primary};

        &:hover {
            box-shadow: inset 0 -25px 0 ${({theme}) => theme.colors.primary};
        }
    }

    .headline {
        display: flex;
        align-items: baseline;
        justify-content: space-between;

        .date {
            font-style: italic;
            text-transform: lowercase;
        }
    }

    .pagination {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: space-between;
        grid-template-areas: "next previous";

        .disabled {
            /* TODO: remove once multiple nows exist */
            display: none;

            text-decoration: line-through solid
                ${({theme}) => theme.colors.black};
            box-shadow: none;
            opacity: 40%;

            &:hover {
                box-shadow: none;
            }
        }

        .newer {
            justify-self: start;
        }

        .older {
            justify-self: end;
        }
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
                    {newer ? (
                        <Link to={`/now/${newer}`} className="newer">
                            newer
                        </Link>
                    ) : (
                        <span className="newer disabled">newer</span>
                    )}

                    {older ? (
                        <Link to={`/now/${older}`} className="older">
                            older
                        </Link>
                    ) : (
                        <span className="older disabled">older</span>
                    )}
                </div>

                <p className="inspiration">
                    inspired by{" "}
                    <a href="https://twitter.com/sivers">derek sivers</a> and{" "}
                    <a href="https://nownownow.com/about">nownownow</a>
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
