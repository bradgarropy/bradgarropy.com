import {Link} from "gatsby"
import PropTypes from "prop-types"
import styled, {css} from "styled-components"

const button = css`
    display: inline-block;
    background: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.black};
    padding: 0.5rem 0.75rem;
    border-radius: 0.3rem;
    transition: all 300ms;
    border: 2px solid ${({theme}) => theme.colors.black};
    box-shadow: 3px 3px 0 ${({theme}) => theme.colors.black} !important;
    margin-bottom: 5px;

    &.reverse {
        box-shadow: -3px 3px 0 ${({theme}) => theme.colors.black} !important;
    }

    &:hover {
        color: inherit;
        border: 2px solid ${({theme}) => theme.colors.primary};
        box-shadow: 0 5px 0 ${({theme}) => theme.colors.primary} !important;
    }

    &.disabled {
        cursor: default;
        border: 2px solid ${({theme}) => theme.colors.grey};
        box-shadow: 3px 3px 0 ${({theme}) => theme.colors.grey} !important;
    }

    &.disabled.reverse {
        box-shadow: -3px 3px 0 ${({theme}) => theme.colors.grey} !important;
    }
`

const StyledSpan = styled.span`
    ${button}
`

const StyledA = styled.a`
    ${button}
`
const StyledLink = styled(Link)`
    ${button}
`

const LinkButton = ({
    to,
    gatsby = false,
    reverse = false,
    disabled = false,
    ...props
}) => {
    const classes = [reverse && "reverse", disabled && "disabled"]

    if (disabled) {
        return <StyledSpan className={classes}>{props.children}</StyledSpan>
    }

    if (gatsby) {
        return (
            <StyledLink to={to} className={classes}>
                {props.children}
            </StyledLink>
        )
    }

    return (
        <StyledA
            href={to}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.children}
        </StyledA>
    )
}

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    gatsby: PropTypes.bool,
    reverse: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.string,
}

export default LinkButton
