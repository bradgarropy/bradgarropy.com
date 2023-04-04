import fs from "fs"
import matter from "gray-matter"
import path from "path"

import type {Testimonial, TestimonialFrontmatter} from "~/types/testimonial"
import {transformMarkdown} from "~/utils/markdown"

const getTestimonials = async (): Promise<Testimonial[]> => {
    const testimonialsPath = path.join(process.cwd(), "content/testimonials")

    const testimonialPaths = fs.readdirSync(testimonialsPath).map(slug => {
        const testimonialPath = path.join(
            process.cwd(),
            `content/testimonials/${slug}`,
        )

        return testimonialPath
    })

    const promises = testimonialPaths.map(async testimonialPath => {
        const file = matter.read(testimonialPath)
        const html = await transformMarkdown(file.content)

        const testimonial: Testimonial = {
            html,
            frontmatter: file.data as TestimonialFrontmatter,
        }

        return testimonial
    })

    const testimonials = await Promise.all(promises)
    return testimonials
}

export {getTestimonials}
