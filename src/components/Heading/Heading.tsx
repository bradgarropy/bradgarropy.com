import {FC} from "react"
import slugify from "slugify"

import HeadingStyles from "./Heading.module.css"

type HeadingProps = {
    level: 1 | 2 | 3
    id?: string
}

const Heading: FC<HeadingProps> = ({level, id, children}) => {
    const slug = id
        ? id
        : slugify(children[0], {
              lower: true,
              remove: /[^\w\d\s.]/,
          })

    const link = (
        <a href={`#${slug}`} className={HeadingStyles.link}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={HeadingStyles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
            </svg>
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
                <h2 id={id} className={HeadingStyles.heading}>
                    {link}
                    {children}
                </h2>
            )
        case 3:
            return (
                <h3 id={id} className={HeadingStyles.heading}>
                    {link}
                    {children}
                </h3>
            )

        default:
            return null
    }
}

export default Heading
