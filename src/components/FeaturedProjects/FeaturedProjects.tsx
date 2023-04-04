import type {FC} from "react"

import Project from "~/components/Project"
import type {Project as ProjectType} from "~/types/project"

type FeaturedProjectsProps = {
    featuredProjects: ProjectType[]
}

const FeaturedProjects: FC<FeaturedProjectsProps> = ({featuredProjects}) => {
    return (
        <div className="grid grid-cols-2 gap-7 max-[725px]:grid-cols-1">
            {featuredProjects.map(featuredProject => {
                return (
                    <Project
                        key={featuredProject.name}
                        project={featuredProject}
                    />
                )
            })}
        </div>
    )
}

export default FeaturedProjects
