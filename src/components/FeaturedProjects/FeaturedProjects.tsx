import Project from "components/Project"
import {FC} from "react"
import {Project as ProjectType} from "types/project"

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
