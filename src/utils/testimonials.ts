import {testimonialFrontmatterSchema} from "~/schemas/testimonial"
import type {Markdown} from "~/types/markdown"
import type {Testimonial} from "~/types/testimonial"
import {transformMarkdown} from "~/utils/markdown.server"

const getTestimonials = async (): Promise<Testimonial[]> => {
    const files = import.meta.glob<Markdown>("/content/testimonials/*.md", {
        eager: true,
    })

    const promises = Object.values(files).map(async file => {
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
