import Testimonial from "components/Testimonial"
import {FC} from "react"
import {Testimonial as TestimonialType} from "types/testimonial"

type TestimonialsProps = {
    testimonials: TestimonialType[]
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
