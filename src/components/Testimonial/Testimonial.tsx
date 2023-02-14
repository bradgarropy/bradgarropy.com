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
            className="transition duration-300 p-8 rounded-[0.3rem] border-3 border-black dark:border-white shadow-box hover:shadow-none dark:shadow-box-white hover:dark:shadow-none grid gap-8 max-w-xl"
            id={slug}
            key={testimonial.frontmatter.name}
            to={testimonial.frontmatter.profile}
        >
            <div className="grid grid-cols-[4.375rem_auto] justify-start items-center gap-x-4">
                <img
                    src={createImageUrl(testimonial.frontmatter.photo)}
                    width="460"
                    height="460"
                    alt={testimonial.frontmatter.name}
                    className="border-3 border-black dark:border-white rounded-full"
                />

                <p className="m-0 font-black text-2xl tracking-[-0.075rem] font-heading">
                    {testimonial.frontmatter.name}
                </p>
            </div>

            <Markdown content={markdown} />
        </Link>
    )
}

export default Testimonial
