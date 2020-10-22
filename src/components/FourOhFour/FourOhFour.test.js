import {render, screen} from "../../test-utils/render"
import FourOhFour from "./FourOhFour"

test("shows 404", () => {
    render(<FourOhFour />)
    expect(screen.getByText("404"))
})
