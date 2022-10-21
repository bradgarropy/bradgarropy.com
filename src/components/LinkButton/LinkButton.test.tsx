import {render, screen} from "@testing-library/react"
import LinkButton from "components/LinkButton"
import {expect, test} from "vitest"

test.concurrent("shows link", () => {
    render(<LinkButton to="/">testing</LinkButton>)

    expect(screen.getByText("testing"))
    expect(screen.getByText("testing")).not.toHaveClass("reverse")
})

test.concurrent("shows reverse", () => {
    render(
        <LinkButton to="/" reverse>
            testing
        </LinkButton>,
    )

    expect(screen.getByText("testing"))
    expect(screen.getByText("testing")).toHaveClass("reverse")
})

test.concurrent("shows disabled", () => {
    render(
        <LinkButton to="/" disabled>
            testing
        </LinkButton>,
    )

    expect(screen.getByText("testing"))
    expect(screen.getByText("testing")).toHaveClass("disabled")
})
