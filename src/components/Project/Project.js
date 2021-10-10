import Link from "@bradgarropy/gatsby-link"
import ProjectTech from "components/ProjectTech"
import PropTypes from "prop-types"

import * as styles from "./Project.module.css"

const Project = ({project}) => {
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

Project.propTypes = {
    project: PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        stars: PropTypes.number.isRequired,
        topics: PropTypes.arrayOf(PropTypes.string),
    }),
}

export default Project
