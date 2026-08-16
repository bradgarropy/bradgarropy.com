import type {TestimonialFrontmatter} from "~/schemas/testimonial"

type Testimonial = {
    html: string
    frontmatter: TestimonialFrontmatter
}

export type {Testimonial, TestimonialFrontmatter}
