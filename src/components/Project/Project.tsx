import Link from "@bradgarropy/next-link"
import ProjectTech from "components/ProjectTech"
import {FC} from "react"
import {Project as ProjectType} from "types/project"

type ProjectProps = {
    project: ProjectType
}

const Project: FC<ProjectProps> = ({project}) => {
    return (
        <Link
            className="transition duration-300 p-[1.125rem] rounded-[0.3rem] border-3 border-black dark:border-white shadow-box grid gap-y-4 content-between text-black hover:shadow-none dark:text-white font-text"
            to={`${project.url}#readme`}
        >
            <div>
                <h3 className="m-0 font-heading font-black text-2xl tracking-[-0.075rem]">
                    {project.name}
                </h3>

                <p className="m-0">{project.description}</p>
            </div>

            <div className="grid grid-flow-col justify-between items-center">
                <ProjectTech project={project} />

                <span className="m-0">{`${project.stars}⭐`}</span>
            </div>
        </Link>
    )
}

export default Project
