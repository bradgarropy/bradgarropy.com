import Heading from "components/Heading"
import {render, screen} from "test-utils/render"

test("renders", () => {
    render(<Heading />)
    expect(screen.getByText("Heading"))
})
