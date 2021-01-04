import {render, screen} from "test-utils/render"

import Header from "./Header"

test("shows logo", () => {
    render(<Header />)
    expect(screen.getByLabelText("home"))
})
