import {Link} from "@remix-run/react"
import type {FC} from "react"
import slugify from "slugify"

import Markdown from "~/components/Markdown"
import useMarkdown from "~/hooks/useMarkdown"
import type {Testimonial as TestimonialType} from "~/types/testimonial"
import {createImageUrl} from "~/utils/cloudinary"

type TestimonialProps = {
    testimonial: TestimonialType
}

const Testimonial: FC<TestimonialProps> = ({testimonial}) => {
    const markdown = useMarkdown(testimonial.html)
    const slug = slugify(testimonial.frontmatter.name.toLowerCase())

    return (
        <div
            className="shadow-box dark:shadow-box-white grid max-w-xl justify-items-start gap-8 rounded border-3 border-black p-8 transition duration-300 hover:shadow-none dark:border-white dark:hover:shadow-none"
            id={slug}
            key={testimonial.frontmatter.name}
        >
            <Link
                to={testimonial.frontmatter.profile}
                className="grid grid-cols-[4.375rem_auto] items-center justify-start gap-x-4"
            >
                <img
                    src={createImageUrl(testimonial.frontmatter.photo)}
                    width="460"
                    height="460"
                    alt={testimonial.frontmatter.name}
                    className="rounded-full border-3 border-black dark:border-white"
                />

                <p className="font-heading m-0 text-2xl font-black tracking-[-0.075rem]">
                    {testimonial.frontmatter.name}
                </p>
            </Link>

            <Markdown content={markdown} />
        </div>
    )
}

export default Testimonial
