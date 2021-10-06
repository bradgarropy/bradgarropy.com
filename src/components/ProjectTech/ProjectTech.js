import Icon from "components/Icon"
import PropTypes from "prop-types"
import {getTechnologies} from "utils"

import * as styles from "./ProjectTech.module.css"

const ProjectTech = ({project}) => {
    const technologies = getTechnologies(project.topics)

    return (
        <div className={styles.projectTech}>
            {technologies.map(tech => {
                return <Icon key={tech} name={tech} />
            })}
        </div>
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
