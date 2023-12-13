import {render, screen} from "@testing-library/react"
import {expect, test} from "vitest"

import Testimonials from "~/components/Testimonials"
import {mockTestimonials} from "~/test-utils/mocks"

test("shows name", () => {
    render(<Testimonials testimonials={mockTestimonials} />)

    mockTestimonials.forEach(testimonial => [
        expect(
            screen.getByText(testimonial.frontmatter.name),
        ).toBeInTheDocument(),
    ])
})
