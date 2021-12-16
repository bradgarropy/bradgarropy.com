import Link from "@bradgarropy/next-link"
import {FC, HTMLAttributes} from "react"

import * as styles from "./Section.module.css"

type SectionProps = {
    title: string
    link?: string
} & HTMLAttributes<HTMLDivElement>

const Section: FC<SectionProps> = ({title, link, children, ...props}) => {
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

export default Section
