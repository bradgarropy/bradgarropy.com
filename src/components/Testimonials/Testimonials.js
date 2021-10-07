import "styles/fancyLinks.css"

import Link from "@bradgarropy/gatsby-link"
import {GatsbyImage} from "gatsby-plugin-image"
import PropTypes from "prop-types"
import slugify from "slugify"

import * as styles from "./Testimonials.module.css"

const Testimonials = ({testimonials}) => {
    return (
        <div className={styles.testimonials}>
            {testimonials.map(testimonial => {
                const slug = slugify(testimonial.name.toLowerCase())

                return (
                    <Link
                        className={styles.testimonial}
                        id={slug}
                        key={testimonial.name}
                        to={testimonial.profile}
                    >
                        <div className={styles.header}>
                            <GatsbyImage
                                image={testimonial.photo}
                                alt={testimonial.name}
                                className={styles.photoContainer}
                                imgClassName={styles.photo}
                            />

                            <p className={styles.name}>{testimonial.name}</p>
                        </div>

                        <div
                            className={`fancyLinks ${styles.quote}`}
                            dangerouslySetInnerHTML={{
                                __html: testimonial.html,
                            }}
                        />
                    </Link>
                )
            })}
        </div>
    )
}

Testimonials.propTypes = {
    testimonials: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile: PropTypes.string.isRequired,
            photo: PropTypes.object.isRequired,
            html: PropTypes.string.isRequired,
        }),
    ).isRequired,
}

export default Testimonials
