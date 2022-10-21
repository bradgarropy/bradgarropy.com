import {render, screen} from "@testing-library/react"
import HireMe from "components/HireMe"
import {mockHireMe, mockTestimonials} from "test-utils/mocks"
import {expect, test} from "vitest"

test("shows hire me page", () => {
    render(<HireMe hireMe={mockHireMe} testimonials={mockTestimonials} />)

    expect(screen.getByText("hire me"))
    expect(screen.getByText("💯 what people think of me"))
})
