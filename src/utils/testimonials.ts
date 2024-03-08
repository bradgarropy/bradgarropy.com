import type {Markdown} from "~/types/markdown"
import type {Testimonial, TestimonialFrontmatter} from "~/types/testimonial"
import {transformMarkdown} from "~/utils/markdown.server"

const getTestimonials = async (): Promise<Testimonial[]> => {
    const files = import.meta.glob<Markdown<TestimonialFrontmatter>>(
        "/content/testimonials/*.md",
        {eager: true},
    )

    const promises = Object.values(files).map(async file => {
        const testimonial: Testimonial = {
            html: await transformMarkdown(file.markdown),
            frontmatter: file.attributes,
        }

        return testimonial
    })

    const testimonials = await Promise.all(promises)
    return testimonials
}

export {getTestimonials}
