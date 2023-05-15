import {render, screen} from "@testing-library/react"

import Shirts from "~/components/Shirts"

test("shows shirts", () => {
    render(<Shirts />)

    expect(screen.getByAltText("bg codes"))
    expect(screen.getByAltText("cobalt2"))
    expect(screen.getByAltText("night owl"))
    expect(screen.getByAltText("monokai"))
})
