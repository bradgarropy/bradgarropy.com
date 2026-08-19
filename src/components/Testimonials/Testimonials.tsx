import type {FC} from "react"

import Testimonial from "~/components/Testimonial"
import type {RenderedTestimonial} from "~/types/testimonial"

type TestimonialsProps = {
    testimonials: RenderedTestimonial[]
}

const Testimonials: FC<TestimonialsProps> = ({testimonials}) => {
    return (
        <div className="grid gap-16">
            {testimonials.map(testimonial => (
                <Testimonial
                    key={testimonial.frontmatter.name}
                    testimonial={testimonial}
                />
            ))}
        </div>
    )
}

export default Testimonials
