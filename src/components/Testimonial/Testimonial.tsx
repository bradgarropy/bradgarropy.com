import Link from "@bradgarropy/next-link"
import Markdown from "components/Markdown"
import {useMarkdown} from "hooks"
import {FC} from "react"
import slugify from "slugify"
import {Testimonial as TestimonialType} from "types/testimonial"
import {createImageUrl} from "utils/cloudinary"

import TestimonialStyles from "./Testimonial.module.css"

type TestimonialProps = {
    testimonial: TestimonialType
}

const Testimonial: FC<TestimonialProps> = ({testimonial}) => {
    const markdown = useMarkdown(testimonial.html)
    const slug = slugify(testimonial.frontmatter.name.toLowerCase())

    return (
        <Link
            className={TestimonialStyles.testimonial}
            id={slug}
            key={testimonial.frontmatter.name}
            to={testimonial.frontmatter.profile}
        >
            <div className={TestimonialStyles.header}>
                <img
                    src={createImageUrl(testimonial.frontmatter.photo)}
                    width="460"
                    height="460"
                    alt={testimonial.frontmatter.name}
                    className={TestimonialStyles.photo}
                />

                <p className={TestimonialStyles.name}>
                    {testimonial.frontmatter.name}
                </p>
            </div>

            <Markdown content={markdown} />
        </Link>
    )
}

export default Testimonial
