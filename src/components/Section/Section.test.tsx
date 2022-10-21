import {render, screen} from "@testing-library/react"
import Section from "components/Section"
import {expect, test} from "vitest"

test.concurrent("shows section", () => {
    render(<Section title="Test" link="https://example.com" />)

    expect(screen.getByText("Test").parentElement).toHaveAttribute(
        "href",
        "https://example.com",
    )
})

test.concurrent("shows section without link", () => {
    render(<Section title="Test" />)
    expect(screen.getByText("Test").parentElement).not.toHaveAttribute("href")
})
