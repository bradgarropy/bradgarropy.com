import HireMe from "components/HireMe"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<HireMe />)
    expect(screen.getByText("HireMe"))
})
