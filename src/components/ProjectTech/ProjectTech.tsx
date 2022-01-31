import Icon from "components/Icon"
import {FC} from "react"
import {Project} from "types/project"
import {getTechnologies} from "utils"

import styles from "./ProjectTech.module.css"

type ProjectTechProps = {
    project: Project
}

const ProjectTech: FC<ProjectTechProps> = ({project}) => {
    const technologies = getTechnologies(project.topics)

    return (
        <div className={styles.projectTech}>
            {technologies.map(tech => {
                return <Icon key={tech} name={tech} />
            })}
        </div>
    )
}

export default ProjectTech
