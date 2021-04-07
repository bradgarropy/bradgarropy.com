import PropTypes from "prop-types"
import styled from "styled-components"

const ProjectWrapper = styled.a`
    padding: 1.125rem;
    border-radius: 0.3rem;
    border: 3px solid ${({theme}) => theme.colors.black};
    box-shadow: 3px 3px 0 ${({theme}) => theme.colors.black};
    display: grid;
    color: ${({theme}) => theme.colors.black};

    :hover {
        box-shadow: none;
    }
`

const Title = styled.p`
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 2rem;
    letter-spacing: -0.1rem;
`

const Description = styled.p`
    margin: 0;
`

const Meta = styled.div`
    margin-top: 2rem;
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
            <Title>{project.title}</Title>
            <Description>{project.description}</Description>

            <Meta>
                <span>tech</span>
                <Stars>{`${project.stars}⭐`}</Stars>
            </Meta>
        </ProjectWrapper>
    )
}

Project.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
        stars: PropTypes.number,
        tech: PropTypes.arrayOf(PropTypes.string),
    }),
}

export default Project
