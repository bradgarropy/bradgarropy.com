import Testimonials from "components/Testimonials"
import PropTypes from "prop-types"

import * as styles from "./HireMe.module.css"

const HireMe = ({html, testimonials}) => {
    return (
        <>
            <div
                className={`fancyLinks ${styles.hireMe}`}
                dangerouslySetInnerHTML={{__html: html}}
            />

            <h1 id="testimonials">💯 what people think of me</h1>
            <Testimonials testimonials={testimonials} />
        </>
    )
}

HireMe.propTypes = {
    html: PropTypes.string.isRequired,
    testimonials: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default HireMe
