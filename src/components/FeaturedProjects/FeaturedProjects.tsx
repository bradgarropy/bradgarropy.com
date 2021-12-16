import Project from "components/Project"
import {useProjects} from "hooks"
import {FC} from "react"

import styles from "./FeaturedProjects.module.css"

const FeaturedProjects: FC = () => {
    const projects = useProjects()

    return (
        <div className={styles.featuredProjects}>
            {projects.map(project => {
                return <Project key={project.name} project={project} />
            })}
        </div>
    )
}

export default FeaturedProjects
