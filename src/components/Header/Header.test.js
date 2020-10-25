import Header from "./Header"
import {render, screen} from "../../test-utils/render"

test("shows logo", () => {
    render(<Header />)
    expect(screen.getByLabelText("bg"))
})
