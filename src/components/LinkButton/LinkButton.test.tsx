import {render, screen} from "@testing-library/react"

import LinkButton from "~/components/LinkButton"

test("shows link", () => {
    render(<LinkButton to="/">testing</LinkButton>)

    expect(screen.getByText("testing")).toBeInTheDocument()
    expect(screen.getByText("testing")).not.toHaveClass("reverse")
})

test("shows reverse", () => {
    render(
        <LinkButton to="/" reverse>
            testing
        </LinkButton>,
    )

    expect(screen.getByText("testing")).toBeInTheDocument()
    expect(screen.getByText("testing")).toHaveClass("shadow-reverse-box")
})

test("shows disabled", () => {
    render(
        <LinkButton to="/" disabled>
            testing
        </LinkButton>,
    )

    expect(screen.getByText("testing")).toBeInTheDocument()
    expect(screen.getByText("testing")).toHaveClass("shadow-gray-300")
})
