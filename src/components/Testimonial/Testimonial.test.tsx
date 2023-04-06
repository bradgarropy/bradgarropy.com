import {render, screen} from "@testing-library/react"

import Testimonial from "~/components/Testimonial"
import {mockTestimonial} from "~/test-utils/mocks"

test("shows name", () => {
    render(<Testimonial testimonial={mockTestimonial} />)
    expect(screen.getByText(mockTestimonial.frontmatter.name))
})

test("shows photo", () => {
    render(<Testimonial testimonial={mockTestimonial} />)
    expect(screen.getByAltText(mockTestimonial.frontmatter.name))
})

test("shows testimonial", () => {
    render(<Testimonial testimonial={mockTestimonial} />)
    expect(screen.getByText("First test review."))
})

test("links to profile", () => {
    render(<Testimonial testimonial={mockTestimonial} />)

    expect(
        screen.getByText(mockTestimonial.frontmatter.name).parentElement,
    ).toHaveAttribute("href", mockTestimonial.frontmatter.profile)
})
