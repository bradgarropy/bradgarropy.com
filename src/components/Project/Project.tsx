import {Link} from "@remix-run/react"
import type {FC} from "react"

import ProjectTech from "~/components/ProjectTech"
import type {Project as ProjectType} from "~/types/project"

type ProjectProps = {
    project: ProjectType
}

const Project: FC<ProjectProps> = ({project}) => {
    return (
        <Link
            className="shadow-box dark:shadow-box-white grid content-between gap-y-4 rounded border-3 border-black p-[1.125rem] transition duration-300 hover:shadow-none dark:border-white dark:hover:shadow-none"
            to={`${project.url}#readme`}
        >
            <div>
                <h3 className="font-heading m-0 text-2xl font-black tracking-[-0.075rem]">
                    {project.name}
                </h3>

                <p className="m-0">{project.description}</p>
            </div>

            <div className="grid grid-flow-col items-center justify-between">
                <ProjectTech project={project} />

                <span className="m-0">{`${project.stars}⭐`}</span>
            </div>
        </Link>
    )
}

export default Project
