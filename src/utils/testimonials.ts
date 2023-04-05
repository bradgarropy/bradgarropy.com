import {allTestimonials} from "~/content"
import type {Testimonial} from "~/types/testimonial"

const getTestimonials = async (): Promise<Testimonial[]> => {
    const testimonials: Testimonial[] = allTestimonials.map(testimonial => ({
        html: testimonial.body.html,
        frontmatter: {
            name: testimonial.name,
            profile: testimonial.profile,
            photo: testimonial.photo,
        },
    }))

    return testimonials
}

export {getTestimonials}
