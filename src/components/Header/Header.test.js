import {render, screen} from "@testing-library/react"

import Header from "./Header"

test("shows logo", () => {
    render(<Header />)
    expect(screen.getByLabelText("bg"))
})
