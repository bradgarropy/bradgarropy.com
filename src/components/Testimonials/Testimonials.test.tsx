import {render, screen} from "@testing-library/react"
import Testimonials from "components/Testimonials"
import {mockTestimonials} from "test-utils/mocks"

test("shows name", () => {
    render(<Testimonials testimonials={mockTestimonials} />)

    mockTestimonials.forEach(testimonial => [
        expect(screen.getByText(testimonial.name)),
    ])
})

test("shows photo", () => {
    render(<Testimonials testimonials={mockTestimonials} />)

    mockTestimonials.forEach(testimonial => [
        expect(screen.getByAltText(testimonial.name)),
    ])
})

test("shows testimonial", () => {
    render(<Testimonials testimonials={mockTestimonials} />)

    expect(screen.getByText("First test review."))
    expect(screen.getByText("Second test review."))
})

test("links to profile", () => {
    render(<Testimonials testimonials={mockTestimonials} />)

    mockTestimonials.forEach(testimonial => [
        expect(
            screen.getByText(testimonial.name).parentElement.parentElement,
        ).toHaveAttribute("href", testimonial.profile),
    ])
})
