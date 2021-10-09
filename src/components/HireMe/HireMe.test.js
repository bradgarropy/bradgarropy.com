import {render, screen} from "@testing-library/react"
import HireMe from "components/HireMe"
import {useHireMe, useTestimonials} from "hooks"
import {mockHireMe, mockTestimonials} from "test-utils/mocks"

jest.mock("hooks")
useHireMe.mockReturnValue(mockHireMe.html)
useTestimonials.mockReturnValue(mockTestimonials)

test("shows hire me page", () => {
    render(<HireMe />)

    expect(screen.getByText("hire me"))
    expect(screen.getByText("💯 what people think of me"))
})
