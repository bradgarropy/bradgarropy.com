import Link from "components/Link"
import {render, screen} from "test-utils/render"

test("shows html link", () => {
    render(<Link to="https://example.com">Example</Link>)

    expect(screen.getByText("Example")).toHaveAttribute("target", "_blank")

    expect(screen.getByText("Example")).toHaveAttribute(
        "rel",
        "noopener noreferrer",
    )
})

test("shows gatsby link", () => {
    render(<Link to="/example">Example</Link>)

    expect(screen.getByText("Example")).not.toHaveAttribute("target", "_blank")
    expect(screen.getByText("Example")).not.toHaveAttribute("rel")
})
