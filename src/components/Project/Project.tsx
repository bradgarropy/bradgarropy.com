import Link from "@bradgarropy/next-link"
import ProjectTech from "components/ProjectTech"
import {FC} from "react"
import {Project as ProjectType} from "types/project"

import styles from "./Project.module.css"

type ProjectProps = {
    project: ProjectType
}

const Project: FC<ProjectProps> = ({project}) => {
    return (
        <Link className={styles.project} to={`${project.url}#readme`}>
            <div>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.description}>{project.description}</p>
            </div>

            <div className={styles.bottom}>
                <ProjectTech project={project} />
                <span className={styles.stars}>{`${project.stars}⭐`}</span>
            </div>
        </Link>
    )
}

export default Project
