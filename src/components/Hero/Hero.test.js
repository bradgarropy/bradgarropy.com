import {render, screen} from "test-utils/render"

import Hero from "./Hero"

test("shows hero", () => {
    render(<Hero />)

    expect(screen.getByText("i use code"))
    expect(screen.getByText("to create things"))
    expect(screen.getByText("that benefit others"))
})
