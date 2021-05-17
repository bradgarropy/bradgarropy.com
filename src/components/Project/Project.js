import Link from "@bradgarropy/gatsby-link"
import ProjectTech from "components/ProjectTech"
import PropTypes from "prop-types"
import styled from "styled-components"

const ProjectWrapper = styled(Link)`
    padding: 1.125rem;
    border-radius: 0.3rem;
    border: 3px solid var(--text);
    box-shadow: 3px 3px 0 var(--text);
    display: grid;
    row-gap: 1rem;
    align-content: space-between;
    color: var(--text);

    :hover {
        color: var(--text);
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
    align-items: center;
`

const Stars = styled.span`
    margin: 0;
`

const Project = ({project}) => {
    return (
        <ProjectWrapper to={`${project.url}#readme`}>
            <Top>
                <Name>{project.name}</Name>
                <Description>{project.description}</Description>
            </Top>

            <Bottom>
                <ProjectTech project={project} />
                <Stars>{`${project.stars}⭐`}</Stars>
            </Bottom>
        </ProjectWrapper>
    )
}

Project.propTypes = {
    project: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stars: PropTypes.number.isRequired,
        topics: PropTypes.arrayOf(PropTypes.string),
    }),
}

export default Project
