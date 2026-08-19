import type {TestimonialFrontmatter} from "~/schemas/testimonial"

type Testimonial = {
    path: string
    markdown: string
    frontmatter: TestimonialFrontmatter
}

type RenderedTestimonial = {
    html: string
    frontmatter: TestimonialFrontmatter
}

export type {RenderedTestimonial, Testimonial, TestimonialFrontmatter}
