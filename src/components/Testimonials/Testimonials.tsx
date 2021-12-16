import "styles/fancyLinks.css"

import Link from "@bradgarropy/next-link"
import {GatsbyImage} from "gatsby-plugin-image"
import {FC} from "react"
import slugify from "slugify"
import {Testimonial} from "types/testimonial"

import * as styles from "./Testimonials.module.css"

type TestimonialsProps = {
    testimonials: Testimonial[]
}

const Testimonials: FC<TestimonialsProps> = ({testimonials}) => {
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

export default Testimonials
