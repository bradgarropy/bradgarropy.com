import FourOhFour from "./FourOhFour"
import {render, screen} from "test-utils/render"

test("shows 404", () => {
    render(<FourOhFour />)
    expect(screen.getByText("404"))
})
