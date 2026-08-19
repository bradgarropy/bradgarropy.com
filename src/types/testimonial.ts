import type {TestimonialFrontmatter} from "~/schemas/testimonial"
import type {RenderedMarkdown} from "~/types/markdown"

type Testimonial = {
    path: string
    markdown: string
    frontmatter: TestimonialFrontmatter
}

type RenderedTestimonial = RenderedMarkdown<TestimonialFrontmatter>

export type {RenderedTestimonial, Testimonial, TestimonialFrontmatter}
