import {render, screen} from "@testing-library/react"
import FancyLink from "components/FancyLink"

test("renders", () => {
    render(<FancyLink />)
    expect(screen.getByText("FancyLink"))
})
