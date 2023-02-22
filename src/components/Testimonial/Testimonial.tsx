import Link from "@bradgarropy/next-link"
import Markdown from "components/Markdown"
import {useMarkdown} from "hooks"
import {FC} from "react"
import slugify from "slugify"
import {Testimonial as TestimonialType} from "types/testimonial"
import {createImageUrl} from "utils/cloudinary"

type TestimonialProps = {
    testimonial: TestimonialType
}

const Testimonial: FC<TestimonialProps> = ({testimonial}) => {
    const markdown = useMarkdown(testimonial.html)
    const slug = slugify(testimonial.frontmatter.name.toLowerCase())

    return (
        <Link
            className="grid max-w-xl gap-8 rounded border-3 border-black p-8 shadow-box transition duration-300 hover:shadow-none dark:border-white dark:shadow-box-white hover:dark:shadow-none"
            id={slug}
            key={testimonial.frontmatter.name}
            to={testimonial.frontmatter.profile}
        >
            <div className="grid grid-cols-[4.375rem_auto] items-center justify-start gap-x-4">
                <img
                    src={createImageUrl(testimonial.frontmatter.photo)}
                    width="460"
                    height="460"
                    alt={testimonial.frontmatter.name}
                    className="rounded-full border-3 border-black dark:border-white"
                />

                <p className="m-0 font-heading text-2xl font-black tracking-[-0.075rem]">
                    {testimonial.frontmatter.name}
                </p>
            </div>

            <Markdown content={markdown} />
        </Link>
    )
}

export default Testimonial
