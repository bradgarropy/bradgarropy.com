import FancyLink from "components/FancyLink"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<FancyLink />)
    expect(screen.getByText("FancyLink"))
})
