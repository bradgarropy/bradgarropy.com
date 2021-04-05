import Section from "components/Section"
import {render, screen} from "test-utils/render"

test("shows section", () => {
    render(<Section title="Test" />)
    expect(screen.getByText("Test"))
})
