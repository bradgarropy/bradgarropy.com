import Link from "@bradgarropy/gatsby-link"
import PropTypes from "prop-types"
import styled, {css} from "styled-components"

const button = css`
    display: inline-block;
    background: var(--white);
    color: var(--black);
    padding: 0.5rem 0.75rem;
    border-radius: 0.3rem;
    transition: all 300ms;
    border: 2px solid var(--black);
    box-shadow: 3px 3px 0 var(--black);
    margin-bottom: 5px;

    &.reverse {
        box-shadow: -3px 3px 0 var(--black);
    }

    :hover {
        color: inherit;
        box-shadow: none;
    }

    &.disabled {
        cursor: default;
        border: 2px solid var(--grey);
        box-shadow: 3px 3px 0 var(--grey);
    }

    &.disabled.reverse {
        box-shadow: -3px 3px 0 var(--grey);
    }
`

const StyledSpan = styled.span`
    ${button}
`
const StyledLink = styled(Link)`
    ${button}
`

const LinkButton = ({to, reverse = false, disabled = false, ...props}) => {
    const classes = [reverse && "reverse", disabled && "disabled"]

    if (disabled) {
        return <StyledSpan className={classes}>{props.children}</StyledSpan>
    }

    return (
        <StyledLink to={to} className={classes}>
            {props.children}
        </StyledLink>
    )
}

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string,
}

export default LinkButton
