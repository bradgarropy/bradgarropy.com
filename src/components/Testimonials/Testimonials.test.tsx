import {render, screen} from "@testing-library/react"
import Testimonials from "components/Testimonials"
import {mockTestimonials} from "test-utils/mocks"
import {expect, test} from "vitest"

test.concurrent("shows name", () => {
    render(<Testimonials testimonials={mockTestimonials} />)

    mockTestimonials.forEach(testimonial => [
        expect(screen.getByText(testimonial.frontmatter.name)),
    ])
})
