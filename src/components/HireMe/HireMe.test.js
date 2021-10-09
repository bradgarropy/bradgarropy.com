import {render, screen} from "@testing-library/react"
import HireMe from "components/HireMe"

test("renders", () => {
    render(<HireMe />)
    expect(screen.getByText("HireMe"))
})
