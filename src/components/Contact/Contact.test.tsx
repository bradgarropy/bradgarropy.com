import {render, screen} from "@testing-library/react"
import Contact from "components/Contact"
import {mockContact} from "test-utils/mocks"

test("shows contact page", () => {
    render(<Contact contact={mockContact} />)
    expect(screen.getByText("contact"))
})
