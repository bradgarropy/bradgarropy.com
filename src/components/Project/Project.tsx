import Link from "@bradgarropy/next-link"
import ProjectStyles from "components/Project/Project.module.css"
import ProjectTech from "components/ProjectTech"
import {FC} from "react"
import {Project as ProjectType} from "types/project"

type ProjectProps = {
    project: ProjectType
}

const Project: FC<ProjectProps> = ({project}) => {
    return (
        <Link className={ProjectStyles.project} to={`${project.url}#readme`}>
            <div>
                <h3 className={ProjectStyles.name}>{project.name}</h3>

                <p className={ProjectStyles.description}>
                    {project.description}
                </p>
            </div>

            <div className={ProjectStyles.bottom}>
                <ProjectTech project={project} />

                <span
                    className={ProjectStyles.stars}
                >{`${project.stars}⭐`}</span>
            </div>
        </Link>
    )
}

export default Project
