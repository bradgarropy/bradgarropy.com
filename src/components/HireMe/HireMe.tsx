import classnames from "classnames"
import Heading from "components/Heading"
import Testimonials from "components/Testimonials"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Markdown} from "types/markdown"
import {Testimonial} from "types/testimonial"

import styles from "./HireMe.module.css"

type HireMeProps = {
    hireMe: Markdown
    testimonials: Testimonial[]
}

const HireMe: FC<HireMeProps> = ({hireMe, testimonials}) => {
    return (
        <>
            <div
                className={classnames(LinkStyles.fancy, styles.hireMe)}
                dangerouslySetInnerHTML={{__html: hireMe.html}}
            />

            <Heading level={1} id="testimonials">
                💯 what people think of me
            </Heading>

            <Testimonials testimonials={testimonials} />
        </>
    )
}

export default HireMe
