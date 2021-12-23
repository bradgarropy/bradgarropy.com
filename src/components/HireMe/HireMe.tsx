import classnames from "classnames"
import Testimonials from "components/Testimonials"
import {FC} from "react"
import LinkStyles from "styles/Link.module.css"
import {Markdown} from "types/markdown"

import styles from "./HireMe.module.css"

type HireMeProps = {
    hireMe: Markdown
    testimonials
}

const HireMe: FC<HireMeProps> = ({hireMe, testimonials}) => {
    return (
        <>
            <div
                className={classnames(LinkStyles.fancy, styles.hireMe)}
                dangerouslySetInnerHTML={{__html: hireMe.html}}
            />

            <h1 id="testimonials">💯 what people think of me</h1>
            <Testimonials testimonials={testimonials} />
        </>
    )
}

export default HireMe
