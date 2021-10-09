import {render, screen} from "@testing-library/react"
import Home from "components/Home"

test("renders", () => {
    render(<Home />)
    expect(screen.getByText("Home"))
})
