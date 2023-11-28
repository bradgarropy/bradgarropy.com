import {render, screen} from "@testing-library/react"

import Heading from "~/components/Heading"

test("shows level one", () => {
    const {container} = render(<Heading level={1}>Heading one</Heading>)

    expect(container.querySelector("h1")).toBeInTheDocument()
    expect(screen.getByText("Heading one")).toHaveAttribute("id", "heading-one")

    expect(screen.getByLabelText("link").parentElement).toHaveAttribute(
        "href",
        "#heading-one",
    )
})

test("shows level two", () => {
    const {container} = render(<Heading level={2}>Heading two</Heading>)

    expect(container.querySelector("h2")).toBeInTheDocument()
    expect(screen.getByText("Heading two")).toHaveAttribute("id", "heading-two")

    expect(screen.getByLabelText("link").parentElement).toHaveAttribute(
        "href",
        "#heading-two",
    )
})

test("shows level three", () => {
    const {container} = render(<Heading level={3}>Heading three</Heading>)

    expect(container.querySelector("h3")).toBeInTheDocument()

    expect(screen.getByText("Heading three")).toHaveAttribute(
        "id",
        "heading-three",
    )

    expect(screen.getByLabelText("link").parentElement).toHaveAttribute(
        "href",
        "#heading-three",
    )
})

test("overrides id", () => {
    render(
        <Heading level={1} id="custom">
            Heading one
        </Heading>,
    )

    expect(screen.getByText("Heading one")).toHaveAttribute("id", "custom")
})
