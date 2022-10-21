import {render, screen} from "@testing-library/react"
import Testimonial from "components/Testimonial"
import {mockTestimonial} from "test-utils/mocks"
import {expect, test} from "vitest"

test.concurrent("shows name", () => {
    render(<Testimonial testimonial={mockTestimonial} />)
    expect(screen.getByText(mockTestimonial.frontmatter.name))
})

test.concurrent("shows photo", () => {
    render(<Testimonial testimonial={mockTestimonial} />)
    expect(screen.getByAltText(mockTestimonial.frontmatter.name))
})

test.concurrent("shows testimonial", () => {
    render(<Testimonial testimonial={mockTestimonial} />)
    expect(screen.getByText("First test review."))
})

test.concurrent("links to profile", () => {
    render(<Testimonial testimonial={mockTestimonial} />)

    expect(
        screen.getByText(mockTestimonial.frontmatter.name).parentElement
            .parentElement,
    ).toHaveAttribute("href", mockTestimonial.frontmatter.profile)
})
