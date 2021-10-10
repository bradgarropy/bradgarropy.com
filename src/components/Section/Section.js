import Link from "@bradgarropy/gatsby-link"
import PropTypes from "prop-types"

import * as styles from "./Section.module.css"

const Section = ({title, link, children, ...props}) => {
    return (
        <section {...props}>
            {link ? (
                <Link className={styles.link} to={link}>
                    <h2 className={styles.title}>{title}</h2>
                </Link>
            ) : (
                <h2 className={styles.title}>{title}</h2>
            )}

            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    children: PropTypes.node,
}

export default Section
