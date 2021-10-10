import {render, screen} from "@testing-library/react"
import Contact from "components/Contact"
import {useContact} from "hooks"
import {mockContact} from "test-utils/mocks"

jest.mock("hooks")
useContact.mockReturnValue(mockContact.html)

test("shows contact page", () => {
    render(<Contact />)
    expect(screen.getByText("contact"))
})
