import {Link} from "@remix-run/react"
import type {FC, HTMLAttributes} from "react"

type SectionProps = {
    title: string
    link?: string
} & HTMLAttributes<HTMLDivElement>

type TitleProps = {
    title: string
}

const Title: FC<TitleProps> = ({title}) => {
    return (
        <h2 className="hover:text-shadow-3 m-0 font-heading text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] transition-all duration-300">
            {title}
        </h2>
    )
}

const Section: FC<SectionProps> = ({title, link, children, ...props}) => {
    return (
        <section {...props}>
            {link ? (
                <Link className="m-0 mb-7 inline-block" to={link}>
                    <Title title={title} />
                </Link>
            ) : (
                <Title title={title} />
            )}

            {children}
        </section>
    )
}

export default Section
