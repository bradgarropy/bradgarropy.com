import {render, screen} from "@testing-library/react"
import Section from "components/Section"

test("shows section", () => {
    render(<Section title="Test" link="https://example.com" />)

    expect(screen.getByText("Test").parentElement).toHaveAttribute(
        "href",
        "https://example.com",
    )
})

test("shows section without link", () => {
    render(<Section title="Test" />)
    expect(screen.getByText("Test").parentElement).not.toHaveAttribute("href")
})
