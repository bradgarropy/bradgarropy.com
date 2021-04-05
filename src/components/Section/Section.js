import PropTypes from "prop-types"
import styled from "styled-components"

const Title = styled.h2`
    font-size: 4.5rem;
    font-weight: 900;
    letter-spacing: -0.2rem;
    margin: 0rem 0rem 1.75rem 0rem;
`

const Section = ({title, children}) => {
    return (
        <section>
            <Title>{title}</Title>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Section
