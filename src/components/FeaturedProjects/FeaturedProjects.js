import Project from "components/Project"
import styled from "styled-components"

const projects = [
    {
        title: "bradgarropy.com",
        description: "🏡 my home on the web",
        url: "https://github.com/bradgarropy/bradgarropy.com",
        stars: 32,
        tech: ["react", "gatsby", "styled-components"],
    },
    {
        title: "bradgarropy.com",
        description: "🏡 my home on the web",
        url: "https://github.com/bradgarropy/bradgarropy.com",
        stars: 32,
        tech: ["react", "gatsby", "styled-components"],
    },
    {
        title: "bradgarropy.com",
        description: "🏡 my home on the web",
        url: "https://github.com/bradgarropy/bradgarropy.com",
        stars: 32,
        tech: ["react", "gatsby", "styled-components"],
    },
    {
        title: "bradgarropy.com",
        description: "🏡 my home on the web",
        url: "https://github.com/bradgarropy/bradgarropy.com",
        stars: 32,
        tech: ["react", "gatsby", "styled-components"],
    },
]

const FeaturedProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

const FeaturedProjects = () => {
    return (
        <FeaturedProjectsWrapper>
            {projects.map(project => {
                return <Project key={project.title} project={project} />
            })}
        </FeaturedProjectsWrapper>
    )
}

export default FeaturedProjects
