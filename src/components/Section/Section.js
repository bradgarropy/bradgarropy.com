import Link from "components/Link"
import PropTypes from "prop-types"
import styled from "styled-components"

const Title = styled.h2`
    font-size: clamp(3rem, 10vw, 4.5rem);
    font-weight: 900;
    letter-spacing: -0.2rem;
    margin: 0rem 0rem 1.75rem 0rem;
`

const StyledLink = styled(Link)`
    display: inline-block;

    :hover {
        text-shadow: 3px 3px var(--primary);
    }
`

const Section = ({title, link, children, ...props}) => {
    return (
        <section {...props}>
            {link ? (
                <StyledLink to={link}>
                    <Title>{title}</Title>
                </StyledLink>
            ) : (
                <Title>{title}</Title>
            )}

            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    children: PropTypes.node,
}

export default Section
