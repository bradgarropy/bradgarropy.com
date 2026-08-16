import {testimonialFrontmatterSchema} from "~/schemas/testimonial"
import type {Testimonial} from "~/types/testimonial"
import {testimonialFiles} from "~/utils/files.server"
import {transformMarkdown} from "~/utils/markdown.server"

const getTestimonials = async (): Promise<Testimonial[]> => {
    const promises = Object.values(testimonialFiles).map(async file => {
        const html = await transformMarkdown(file.markdown)
        const frontmatter = testimonialFrontmatterSchema.parse(file.attributes)

        const testimonial: Testimonial = {
            html,
            frontmatter,
        }

        return testimonial
    })

    const testimonials = await Promise.all(promises)
    return testimonials
}

export {getTestimonials}
