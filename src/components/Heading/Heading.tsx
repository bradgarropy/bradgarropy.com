import HeadingStyles from "components/Heading/Heading.module.css"
import Icon from "components/Icon"
import {FC, ReactNode} from "react"
import slugify from "slugify"

type HeadingProps = {
    level: 1 | 2 | 3
    id?: string
    children?: ReactNode
}

const Heading: FC<HeadingProps> = ({level, id, children}) => {
    const text = typeof children === "string" ? children : children[0]

    const slug = id
        ? id
        : slugify(text, {
              lower: true,
              remove: /[^\w\d\s.]/,
          })

    const link = (
        <a href={`#${slug}`} className={HeadingStyles.link}>
            <Icon name="link" className={HeadingStyles.icon} />
        </a>
    )

    switch (level) {
        case 1:
            return (
                <h1 id={slug} className={HeadingStyles.heading}>
                    {link}
                    {children}
                </h1>
            )
        case 2:
            return (
                <h2 id={slug} className={HeadingStyles.heading}>
                    {link}
                    {children}
                </h2>
            )
        case 3:
            return (
                <h3 id={slug} className={HeadingStyles.heading}>
                    {link}
                    {children}
                </h3>
            )
    }
}

export default Heading
