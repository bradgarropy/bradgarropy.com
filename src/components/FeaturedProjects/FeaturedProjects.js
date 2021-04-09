import Project from "components/Project"
import {useProjects} from "hooks"
import styled from "styled-components"

const FeaturedProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

const FeaturedProjects = () => {
    const projects = useProjects()

    return (
        <FeaturedProjectsWrapper>
            {projects.map(project => {
                return <Project key={project.name} project={project} />
            })}
        </FeaturedProjectsWrapper>
    )
}

export default FeaturedProjects
