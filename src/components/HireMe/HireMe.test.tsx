import {render, screen} from "@testing-library/react"

import HireMe from "~/components/HireMe"
import {mockTestimonials} from "~/test-utils/mocks"

test("shows hire me page", () => {
    render(<HireMe testimonials={mockTestimonials} />)

    expect(screen.getByText("🤝 let's work together"))
    expect(screen.getByText("💯 what people think of me"))
})
