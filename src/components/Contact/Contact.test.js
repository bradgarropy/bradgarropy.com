import {render, screen} from "@testing-library/react"
import Contact from "components/Contact"

test("renders", () => {
    render(<Contact />)
    expect(screen.getByText("Contact"))
})
