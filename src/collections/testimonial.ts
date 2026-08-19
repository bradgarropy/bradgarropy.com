import {testimonialFrontmatterSchema} from "~/schemas/testimonial"
import type {Markdown} from "~/types/markdown"
import type {Testimonial} from "~/types/testimonial"
import {testimonialFiles} from "~/utils/files.server"
import {parseFrontmatter} from "~/utils/frontmatter"

const validateTestimonialPath = (testimonial: Testimonial): void => {
    const {path} = testimonial
    const filename = path.split("/").at(-1)

    if (!filename) {
        throw new Error(`Could not determine filename from ${path}.`)
    }

    if (!filename.endsWith(".md")) {
        throw new Error(`Testimonial filename must end in .md: ${path}.`)
    }
}

const createTestimonials = (
    files: Record<string, Markdown<unknown>>,
): Testimonial[] => {
    const testimonials = Object.entries(files).map(([path, file]) => {
        const {attributes, markdown} = file

        const frontmatter = parseFrontmatter(
            path,
            testimonialFrontmatterSchema,
            attributes,
        )

        const testimonial: Testimonial = {
            path,
            markdown,
            frontmatter,
        }

        validateTestimonialPath(testimonial)
        return testimonial
    })

    testimonials.sort((a, b) => {
        return a.path.localeCompare(b.path)
    })

    return testimonials
}

const testimonials = createTestimonials(testimonialFiles)

export {createTestimonials, testimonials}
