import {testimonials} from "~/collections/testimonial"
import type {RenderedTestimonial} from "~/types/testimonial"
import {renderMarkdown} from "~/utils/markdown.server"

const getTestimonials = async (): Promise<RenderedTestimonial[]> => {
    const promises = testimonials.map(async testimonial => {
        const html = await renderMarkdown(testimonial.markdown)

        const renderedTestimonial: RenderedTestimonial = {
            html,
            frontmatter: testimonial.frontmatter,
        }

        return renderedTestimonial
    })

    const renderedTestimonials = await Promise.all(promises)
    return renderedTestimonials
}

export {getTestimonials}
