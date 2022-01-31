import Link from "@bradgarropy/next-link"
import {FC, HTMLAttributes} from "react"

import SectionStyles from "./Section.module.css"

type SectionProps = {
    title: string
    link?: string
} & HTMLAttributes<HTMLDivElement>

const Section: FC<SectionProps> = ({title, link, children, ...props}) => {
    return (
        <section {...props}>
            {link ? (
                <Link className={SectionStyles.link} to={link}>
                    <h2 className={SectionStyles.title}>{title}</h2>
                </Link>
            ) : (
                <h2 className={SectionStyles.title}>{title}</h2>
            )}

            {children}
        </section>
    )
}

export default Section
