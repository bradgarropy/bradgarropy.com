type Testimonial = {
    html: string
    frontmatter: TestimonialFrontmatter
}

type TestimonialFrontmatter = {
    name: string
    profile: string
    photo: string
}

export type {Testimonial, TestimonialFrontmatter}
