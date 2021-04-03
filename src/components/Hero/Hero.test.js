import {render, screen} from "test-utils/render"

import Hero from "./Hero"

test("shows hero", () => {
    render(<Hero />)

    expect(screen.getByText("lead frontend developer"))
    expect(screen.getByText("growing content creator"))
    expect(screen.getByText("side project connoisseur"))
    expect(screen.getByText("open source maintainer"))
})
