import Link from "@bradgarropy/next-link"
import {FC, HTMLAttributes} from "react"

type SectionProps = {
    title: string
    link?: string
} & HTMLAttributes<HTMLDivElement>

type TitleProps = {
    title: string
}

const Title: FC<TitleProps> = ({title}) => {
    return (
        <h2 className="transition-[text-shadow] duration-300 text-[clamp(3rem,_10vw,_4.5rem)] font-black tracking-[-0.2rem] m-0 hover:[text-shadow:_3px_3px_var(--purple)]">
            {title}
        </h2>
    )
}

const Section: FC<SectionProps> = ({title, link, children, ...props}) => {
    return (
        <section {...props}>
            {link ? (
                <Link className="inline-block m-0 mb-7" to={link}>
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
