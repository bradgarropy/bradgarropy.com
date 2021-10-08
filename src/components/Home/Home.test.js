import Home from "components/Home"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<Home />)
    expect(screen.getByText("Home"))
})
