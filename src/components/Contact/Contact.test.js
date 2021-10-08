import Contact from "components/Contact"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<Contact />)
    expect(screen.getByText("Contact"))
})
