import Section from "components/Section"
import {render, screen} from "test-utils/render"

test("shows section", () => {
    render(<Section title="Test" link="https://example.com" />)

    expect(screen.getByText("Test").parentElement).toHaveAttribute(
        "href",
        "https://example.com",
    )
})
