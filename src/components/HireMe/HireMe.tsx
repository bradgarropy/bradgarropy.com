import classnames from "classnames"
import Heading from "components/Heading"
import Testimonials from "components/Testimonials"
import {useMarkdown} from "hooks"
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
    const Markdown = useMarkdown(hireMe.html)

    return (
        <>
            <div className={classnames(LinkStyles.fancy, styles.hireMe)}>
                {Markdown}
            </div>

            <Heading level={1} id="testimonials">
                💯 what people think of me
            </Heading>

            <Testimonials testimonials={testimonials} />
        </>
    )
}

export default HireMe
