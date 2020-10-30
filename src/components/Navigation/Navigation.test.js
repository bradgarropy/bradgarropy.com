import Navigation from "./Navigation"
import {render, screen} from "test-utils/render"

const links = ["blog", "now", "uses", "hire me", "contact"]

test("shows links", () => {
    render(<Navigation />)

    links.forEach(link => expect(screen.getByText(link)))
})
