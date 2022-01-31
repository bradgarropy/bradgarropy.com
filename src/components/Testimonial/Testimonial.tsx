import Link from "@bradgarropy/next-link"
import classnames from "classnames"
import {useMarkdown} from "hooks"
import Image from "next/image"
import {FC} from "react"
import slugify from "slugify"
import LinkStyles from "styles/Link.module.css"
import {Testimonial as TestimonialType} from "types/testimonial"

import TestimonialStyles from "./Testimonial.module.css"

type TestimonialProps = {
    testimonial: TestimonialType
}

const Testimonial: FC<TestimonialProps> = ({testimonial}) => {
    const Markdown = useMarkdown(testimonial.html)
    const slug = slugify(testimonial.frontmatter.name.toLowerCase())

    return (
        <Link
            className={TestimonialStyles.testimonial}
            id={slug}
            key={testimonial.frontmatter.name}
            to={testimonial.frontmatter.profile}
        >
            <div className={TestimonialStyles.header}>
                <Image
                    src={testimonial.frontmatter.photo}
                    width="460"
                    height="460"
                    alt={testimonial.frontmatter.name}
                    className={TestimonialStyles.photo}
                />

                <p className={TestimonialStyles.name}>
                    {testimonial.frontmatter.name}
                </p>
            </div>

            <div
                className={classnames(
                    LinkStyles.fancy,
                    TestimonialStyles.quote,
                )}
            >
                {Markdown}
            </div>
        </Link>
    )
}

export default Testimonial
