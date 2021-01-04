import {render, screen} from "test-utils/render"

import LinkButton from "./LinkButton"

test("shows link", () => {
    render(<LinkButton href="/">testing</LinkButton>)

    expect(screen.getByText("testing"))
    expect(screen.getByText("testing")).not.toHaveClass("reverse")
})

test("shows next link", () => {
    render(
        <LinkButton href="/" next>
            testing
        </LinkButton>,
    )

    expect(screen.getByText("testing"))
})

test("shows reverse", () => {
    render(
        <LinkButton href="/" reverse>
            testing
        </LinkButton>,
    )

    expect(screen.getByText("testing"))
    expect(screen.getByText("testing")).toHaveClass("reverse")
})

test("shows disabled", () => {
    render(
        <LinkButton href="/" disabled>
            testing
        </LinkButton>,
    )

    expect(screen.getByText("testing"))
    expect(screen.getByText("testing")).toHaveClass("disabled")
})
