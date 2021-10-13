import {render, screen} from "@testing-library/react"

import Hero from "./Hero"

test("shows hero", () => {
    render(<Hero />)

    expect(screen.getByText("lead frontend developer"))
    expect(screen.getByText("growing content creator"))
    expect(screen.getByText("side project connoisseur"))
    expect(screen.getByText("open source maintainer"))
})
