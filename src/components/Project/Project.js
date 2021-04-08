import PropTypes from "prop-types"
import styled from "styled-components"

const ProjectWrapper = styled.a`
    padding: 1.125rem;
    border-radius: 0.3rem;
    border: 3px solid ${({theme}) => theme.colors.black};
    box-shadow: 3px 3px 0 ${({theme}) => theme.colors.black};
    display: grid;
    row-gap: 2rem;
    align-content: space-between;
    color: ${({theme}) => theme.colors.black};

    :hover {
        box-shadow: none;
    }
`

const Name = styled.h3`
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    letter-spacing: -0.075rem;
    overflow-wrap: anywhere;
`

const Description = styled.p`
    margin: 0;
`

const Top = styled.div``

const Bottom = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
`

const Stars = styled.span`
    margin: 0;
`

const Project = ({project}) => {
    return (
        <ProjectWrapper
            href={`${project.url}#readme`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Top>
                <Name>{project.name}</Name>
                <Description>{project.description}</Description>
            </Top>

            <Bottom>
                <span>tech</span>
                <Stars>{`${project.stars}⭐`}</Stars>
            </Bottom>
        </ProjectWrapper>
    )
}

Project.propTypes = {
    project: PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        stars: PropTypes.number,
        tech: PropTypes.arrayOf(PropTypes.string),
    }),
}

export default Project
