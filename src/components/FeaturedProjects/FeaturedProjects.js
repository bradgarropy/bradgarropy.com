import Project from "components/Project"
import {useProjects} from "hooks"

import * as styles from "./FeaturedProjects.module.css"

const FeaturedProjects = () => {
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
