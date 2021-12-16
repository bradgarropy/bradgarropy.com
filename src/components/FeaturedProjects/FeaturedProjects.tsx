import Project from "components/Project"
import {FC} from "react"
import {Project as ProjectType} from "types/project"

import styles from "./FeaturedProjects.module.css"

type FeaturedProjectsProps = {
    featuredProjects: ProjectType[]
}

const FeaturedProjects: FC<FeaturedProjectsProps> = ({featuredProjects}) => {
    return (
        <div className={styles.featuredProjects}>
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
