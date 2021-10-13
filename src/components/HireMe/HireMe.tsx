import Testimonials from "components/Testimonials"
import {useHireMe, useTestimonials} from "hooks"
import {FC} from "react"

import * as styles from "./HireMe.module.css"

const HireMe: FC = () => {
    const hireMe = useHireMe()
    const testimonials = useTestimonials()

    return (
        <>
            <div
                className={`fancyLinks ${styles.hireMe}`}
                dangerouslySetInnerHTML={{__html: hireMe}}
            />

            <h1 id="testimonials">💯 what people think of me</h1>
            <Testimonials testimonials={testimonials} />
        </>
    )
}

export default HireMe
