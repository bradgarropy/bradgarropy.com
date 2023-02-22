import Icon from "components/Icon"
import {FC} from "react"
import {Project} from "types/project"
import {getTechnologies} from "utils"

type ProjectTechProps = {
    project: Project
}

const ProjectTech: FC<ProjectTechProps> = ({project}) => {
    const technologies = getTechnologies(project.topics)

    return (
        <div className="grid grid-flow-col items-center gap-x-2">
            {technologies.map(tech => {
                return <Icon key={tech} name={tech} />
            })}
        </div>
    )
}

export default ProjectTech
