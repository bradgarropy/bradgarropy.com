import {render, screen} from "@testing-library/react"

import Shirts from "~/components/Shirts"

test("shows shirts", () => {
    render(<Shirts />)

    expect(screen.getByAltText("bg codes")).toBeInTheDocument()
    expect(screen.getByAltText("cobalt2")).toBeInTheDocument()
    expect(screen.getByAltText("night owl")).toBeInTheDocument()
    expect(screen.getByAltText("monokai")).toBeInTheDocument()
})
