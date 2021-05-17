import Icon from "components/Icon"
import PropTypes from "prop-types"
import styled from "styled-components"
import {getTechnologies} from "utils"

const Technologies = styled.div`
    display: grid;
    grid-auto-flow: column;
    column-gap: 0.5rem;
    align-items: center;
`

const ProjectTech = ({project}) => {
    const technologies = getTechnologies(project.topics)

    return (
        <Technologies>
            {technologies.map(tech => {
                return <Icon key={tech} name={tech} />
            })}
        </Technologies>
    )
}

ProjectTech.propTypes = {
    project: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stars: PropTypes.number.isRequired,
        topics: PropTypes.arrayOf(PropTypes.string),
    }),
}

export default ProjectTech
