import Link from "@bradgarropy/next-link"
import classnames from "classnames"
import Image from "next/image"
import {FC} from "react"
import slugify from "slugify"
import LinkStyles from "styles/Link.module.css"
import {Testimonial} from "types/testimonial"

import styles from "./Testimonials.module.css"

type TestimonialsProps = {
    testimonials: Testimonial[]
}

const Testimonials: FC<TestimonialsProps> = ({testimonials}) => {
    return (
        <div className={styles.testimonials}>
            {testimonials.map(testimonial => {
                const slug = slugify(testimonial.frontmatter.name.toLowerCase())

                return (
                    <Link
                        className={styles.testimonial}
                        id={slug}
                        key={testimonial.frontmatter.name}
                        to={testimonial.frontmatter.profile}
                    >
                        <div className={styles.header}>
                            <Image
                                src={testimonial.frontmatter.photo}
                                width="460"
                                height="460"
                                alt={testimonial.frontmatter.name}
                                className={styles.photo}
                            />

                            <p className={styles.name}>
                                {testimonial.frontmatter.name}
                            </p>
                        </div>

                        <div
                            className={classnames(
                                LinkStyles.fancy,
                                styles.quote,
                            )}
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
