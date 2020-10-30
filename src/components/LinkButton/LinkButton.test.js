import LinkButton from "./LinkButton"
import {render, screen} from "test-utils/render"

test("shows link", () => {
    render(<LinkButton to="/">testing</LinkButton>)

    expect(screen.getByText("testing"))
    expect(screen.getByText("testing")).not.toHaveClass("reverse")
})

test("shows gatsby link", () => {
    render(
        <LinkButton to="/" gatsby>
            testing
        </LinkButton>,
    )

    expect(screen.getByText("testing"))
    expect(screen.getByText("testing")).toHaveAttribute("gatsby")
})

test("shows reverse", () => {
    render(
        <LinkButton to="/" reverse>
            testing
        </LinkButton>,
    )

    expect(screen.getByText("testing"))
    expect(screen.getByText("testing")).toHaveClass("reverse")
})

test("shows disabled", () => {
    render(
        <LinkButton to="/" disabled>
            testing
        </LinkButton>,
    )

    expect(screen.getByText("testing"))
    expect(screen.getByText("testing")).toHaveClass("disabled")
})
